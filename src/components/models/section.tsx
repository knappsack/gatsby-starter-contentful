import * as React from "react"

import { NavigationSection } from "./navigation-section"
import { TextSection } from "./text-section"
import { TopicSection } from "./topic-section"
import { ContentfulTextSection } from "../contentful/contentful-text-section"
import { ContentfulTopicSection } from "../contentful/contentful-topic-section"
import { uuid } from "../../lib/create-uuid"

type ContentfulSection = ContentfulTopicSection | ContentfulTextSection

export type SectionProps = {
  model: ContentfulSection[]
}

export const Section = ({ model }: SectionProps) => {
  return (
    <main role="main">
      {model?.map((section: ContentfulSection) => {
        return (
          <React.Fragment key={uuid()}>
            {uuid()}
            {getSection(section)}
          </React.Fragment>
        )
      })}
    </main>
  )
}

const getSection = (section: ContentfulSection) => {
  switch (section.__typename) {
    case `Contentful_NavigationSection`:
      return <NavigationSection model={section as ContentfulTopicSection} />

    case `Contentful_TopicSection`:
      return <TopicSection model={section as ContentfulTopicSection} />

    case `Contentful_TextSection`:
      return <TextSection model={section as ContentfulTextSection} />

    default:
      return null
  }
}
