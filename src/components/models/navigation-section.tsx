import type { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { NavigationFooter } from "./navigation-footer"
import { NavigationHeader } from "./navigation-header"
import { NavigationSitemap } from "./navigation-sitemap"

export type NavigationSectionProps = {
  model: ContentfulNavigationSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  switch (model.variant) {
    case `header`:
      return (
        <NavigationHeader
          model={model}
          aria-label="Global navigation"
          role="navigation"
        />
      )

    case `footer`:
      return <NavigationFooter model={model} />

    case `sitemap`:
      return <NavigationSitemap model={model} />

    default:
      return null
  }
}
