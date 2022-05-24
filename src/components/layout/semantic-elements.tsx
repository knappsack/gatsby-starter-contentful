import * as React from "react"

import { createUuid } from "../../lib/create-uuid"

type GetSemanticTag = {
  section: {
    model: Record<string, any>
  }
  count: number
  index: number
}

const getSemanticTag = ({ section, count, index }: GetSemanticTag) => {
  const {
    model: {
      __typename,
      sys: { id },
      variant,
    },
  } = section

  if (
    index === 0 &&
    __typename === "Contentful_NavigationSection" &&
    variant.toLowerCase() === "header"
  ) {
    return "header"
  }

  if (
    (index === count && __typename === "Contentful_NavigationSection") ||
    (index === count - 1 &&
      __typename === "Contentful_NavigationSection" &&
      variant === "sitemap")
  ) {
    return "footer"
  }

  return "main"
}

type SemanticElementsProps = {
  children: JSX.Element[]
}

const SemanticElements = (props: SemanticElementsProps) => {
  const sections: Record<string, React.ReactNode[]> = {
    footer: [],
    header: [],
    main: [],
  }

  React.Children.forEach(props.children, (child, index) => {
    if (!child) {
      return null
    }
    sections[
      getSemanticTag({
        section: child.props.children.props,
        count: React.Children.count(props.children) - 1,
        index,
      })
    ].push(
      <React.Fragment key={createUuid(`${index}`)}>{child}</React.Fragment>
    )
  })

  return (
    <React.Fragment>
      {sections.header.length > 0 && (
        <header role="banner">
          <a data-skip-to-content="" href="#main">
            Skip to content
          </a>
          {sections.header}
        </header>
      )}
      {sections.main.length > 0 && (
        <main role="main" id="main">
          {sections.main}
        </main>
      )}
      {sections.footer.length > 0 && (
        <footer role="contentinfo">{sections.footer}</footer>
      )}
    </React.Fragment>
  )
}

export default SemanticElements
