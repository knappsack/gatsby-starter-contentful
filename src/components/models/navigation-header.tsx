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
import { mediaQuery } from "../../styles/media-query"
import { focusStyles } from "./text-section.styles"
import { useGtag } from "../../lib/gtag"
import { GridTemplate } from "../layout/grid-template"

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
  }

  const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    useGtag("event", "click", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
  }

  const handleNavigation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    /** Toggle navigation visibility */
    setNavigationVisibility(!navigationVisibility)
    /** Set focus back on Menu button */
    ref.current?.focus()

    useGtag("event", "click", {
      event_id: event.currentTarget.dataset.analyticsId,
    })
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

  const mobileOnlyProps = windowWidth < 1024 && {
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
      <GridTemplate variant="header">
        {options.branding && logo && (
          <Link
            aria-label={logo.title}
            onClick={handleOnClick}
            data-analytics-id="action:logo-header"
            css={{
              gridArea: "branding",
              display: "flex",
              width: 42,
              height: "auto",
              margin: "auto 0",
              ":focus": focusStyles,
            }}
            to="/"
          >
            <img
              alt={logo.description}
              src={`${logo.url}?w=150&fm=webp`}
              title={logo.title}
              width={150}
              height="auto"
              css={{
                display: "flex",
                margin: "auto",
              }}
            />
          </Link>
        )}
        <button
          onClick={handleNavigation}
          css={[
            actionStyles({ variant: "primary" }),
            mediaQuery({ display: ["block", "block", "none"] }),
            { marginTop: "auto", marginBottom: "auto" },
          ]}
          aria-label="Toggle navigation"
          aria-controls="global-navigation"
          aria-expanded={navigationVisibility}
          aria-pressed={navigationVisibility}
          data-analytics-id="action:open-navigation"
          role="button"
          ref={ref}
        >
          Menu <Icon icon="menu" variant="small" aria-hidden="true" />
        </button>
        <div
          id="global-navigation"
          aria-labelledby="navigation"
          css={[
            navigationHeaderStyles({
              options: {
                visible: navigationVisibility,
              },
            }),
            {
              "@media (max-width: 1023px)": navigationStyle,
            },
          ]}
          {...mobileOnlyProps}
        >
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
              "@media (min-width: 1024px)": {
                display: "none",
              },
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
              data-analytics-id="action:close-navigation"
              role="button"
            >
              <Icon icon="x" variant="medium" aria-hidden="true" />
            </button>
          </div>
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
            {
              "@media (min-width: 1024px)": {
                visibility: "hidden",
              },
            },
          ]}
        />
      </GridTemplate>
    </Analytics>
  )
}
