import * as React from "react"

import { theme } from "../styles/global-css-variables.css"

const handleRefreshData = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  const currentTarget = event.currentTarget
  currentTarget.disabled = true

  fetch(`${location.origin}/__refresh`, {
    method: "POST",
    headers: {
      authorization: `${process.env.GATSBY_REFRESH_TOKEN}`,
    },
  }).then(response => {
    console.log(response)
    if (response.status === 200) {
      setTimeout(() => {
        currentTarget.disabled = false
      }, 1000)
    }
  })
}

export const RefreshData = () => {
  if (process.env.NODE_ENV === "production") return null

  return (
    <button
      onClick={handleRefreshData}
      role="button"
      aria-label="Refresh Data"
      aria-hidden="true"
      css={{
        fontFamily: theme.font.family.body,
        backdropFilter: "saturate(180%) blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "rgb(0 0 0 / 30%) 0px 0px 6px, rgb(0 0 0 / 15%) 0px 1px 6px",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 18,
        color: "rgb(34, 34, 34)",
        position: "fixed",
        display: "flex",
        padding: "12px 20px",
        right: 24,
        bottom: 24,
        transition: "opacity .2s ease",
        ":disabled": {
          cursor: "not-allowed",
          opacity: 0.5,
        },
      }}
    >
      Refresh Data
    </button>
  )
}
