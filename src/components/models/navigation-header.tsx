import * as React from "react"

import { ContentfulNavigation } from "../contentful/contentful-navigation"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { Navigation } from "./navigation"
import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../layout/analytics"
import { Link } from "../elements/link"
import { UseTypesOf } from "../../lib/use-types-of"
import { Icon } from "../elements/icon"
import { actionStyles } from "../elements/action.styles"
import { navigationHeaderStyles } from "./navigation-header.styles"
import { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { Heading } from "../elements/heading"
import { useWindowWidth } from "../../lib/use-window-width"

export type NavigationHeaderProps = UseTypesOf["div"] & {
  model: ContentfulNavigationSection
}

export const NavigationHeader = ({ model }: NavigationHeaderProps) => {
  const ref = React.useRef<HTMLButtonElement>(null)

  const [navigationVisibility, setNavigationVisibility] = React.useState(false)
  const [navigationStyle, setNavigationStyle] = React.useState({
    visibility: "hidden",
  } as CSSObject)

  const { windowWidth } = useWindowWidth()

  const {
    sys: { id },
    branding,
    heading,
    eventId,
    navigationsCollection,
    variant,
    logo,
  } = model

  const options = {
    branding: true,
    heading: false,
    mobile: windowWidth < 1023,
  }

  const handleNavigation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    /** Toggle navigation visibility */
    setNavigationVisibility(!navigationVisibility)
    /** Set focus back on Menu button */
    ref.current?.focus()
  }

  React.useEffect(() => {
    /** Apply styling after .25 seconds transition */
    if (!navigationVisibility) {
      setTimeout(() => {
        setNavigationStyle({ visibility: "hidden" })
      }, 300)
    }

    if (navigationVisibility) {
      setNavigationStyle({ visibility: "visible" })
    }
  }, [navigationVisibility])

  const mobileOnlyProps = windowWidth < 1023 && {
    "tab-index": -1,
    role: "dialog",
    "aria-modal": navigationVisibility,
  }

  return (
    <Analytics
      area="nav"
      aria-label="Global navigation"
      eventId={eventId}
      role="navigation"
      variant="header"
      options={{
        border: true,
      }}
    >
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 1380,
          margin: "auto",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {options.branding && logo && (
          <Link
            aria-label={logo.title}
            css={{
              gridArea: "branding",
              display: "inline-block",
              width: 46,
              height: "auto",
              margin: "auto 0",
            }}
            to="/"
          >
            <img
              alt={logo.description}
              src={`${logo.url}?w=150&fm=webp`}
              title={logo.title}
            />
          </Link>
        )}
        {windowWidth < 1023 && (
          <button
            onClick={handleNavigation}
            css={[
              actionStyles({ variant: "primary" }),
              { marginTop: "auto", marginBottom: "auto" },
            ]}
            aria-label="Toggle navigation"
            aria-controls="global-navigation"
            aria-expanded={navigationVisibility}
            aria-pressed={navigationVisibility}
            role="button"
            ref={ref}
          >
            Menu <Icon name="menu" variant="small" aria-hidden="true" />
          </button>
        )}
        <div
          id="global-navigation"
          aria-labelledby="navigation"
          css={[
            navigationHeaderStyles({
              options: {
                visible: navigationVisibility,
                mobile: windowWidth < 1023,
              },
            }),
            windowWidth < 1023 && navigationStyle,
          ]}
          {...mobileOnlyProps}
        >
          {windowWidth < 1023 && (
            <div
              css={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 24px",
                alignContent: "center",
                position: "sticky",
                top: 0,
                background: "white",
                borderBottom: `1px solid ${theme.colors.border}`,
              }}
            >
              <Heading
                id="navigation"
                is="h5"
                variant="small"
                css={{ margin: "auto 0" }}
              >
                Knappsack
              </Heading>
              <button
                onClick={handleNavigation}
                css={{
                  color: theme.colors.link,
                  display: "inline-flex",
                  cursor: "pointer",
                  borderRadius: 6,
                  ":focus": {
                    boxShadow: `0 0 0 4px ${theme.colors.focus}`,
                    outline: "none",
                  },
                }}
                aria-label="Close navigation"
                aria-controls="global-navigation"
                role="button"
              >
                <Icon name="x" variant="medium" aria-hidden="true" />
              </button>
            </div>
          )}
          {navigationsCollection.items.map(
            (navigation: ContentfulNavigation) => {
              const {
                sys: { id },
              } = model

              return (
                <Navigation
                  key={createUuid(id)}
                  model={navigation}
                  options={options}
                  variant={variant}
                />
              )
            }
          )}
        </div>
        <div
          aria-hidden="true"
          onClick={handleNavigation}
          css={[
            {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              content: `""`,
              height: "100%",
              inset: "0%",
              left: 0,
              opacity: navigationVisibility ? 1 : 0,
              position: "fixed",
              top: 0,
              transition: "opacity .3s ease",
              width: "100%",
              zIndex: 1040,
            },
            navigationStyle,
            windowWidth > 1023 && {
              visibility: "hidden",
            },
          ]}
        />
      </div>
    </Analytics>
  )
}
