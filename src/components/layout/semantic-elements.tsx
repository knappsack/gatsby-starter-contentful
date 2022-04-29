import * as React from "react"

import { uuid } from "../../lib/create-uuid"

const getSemanticTag = ({ section, count, index }) => {
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
    index === count &&
    __typename === "Contentful_NavigationSection" &&
    variant.toLowerCase() === "footer"
  ) {
    return "footer"
  }

  return "main"
}

const SemanticElements: React.FC<any> = (props) => {
  const sections: Record<string, React.ReactNode[]> = {
    footer: [],
    header: [],
    main: [],
  }

  React.Children.forEach(props.children, (child, index) => {
    sections[
      getSemanticTag({
        section: child.props.children.props,
        count: React.Children.count(props.children) - 1,
        index,
      })
    ].push(<React.Fragment key={uuid(`${index}`)}>{child}</React.Fragment>)
  })

  return (
    <React.Fragment>
      {sections.header.length > 0 && (
        <header role="banner">{sections.header}</header>
      )}
      {sections.main.length > 0 && (
        <main role="main" id="content">
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
