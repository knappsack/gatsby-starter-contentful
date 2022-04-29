import * as React from "react"

import SemanticElements from '../layout/semantic-elements'
import { uuid } from "../../lib/create-uuid"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { ContentfulTextSection } from "../contentful/contentful-text-section"
import { ContentfulTopicSection } from "../contentful/contentful-topic-section"
import { NavigationSection } from "./navigation-section"
import { TextSection } from "./text-section"
import { TopicSection } from "./topic-section"

type ContentfulSection =
  | ContentfulNavigationSection
  | ContentfulTextSection
  | ContentfulTopicSection

type SectionProps = {
  model: ContentfulSection[]
}

export const Section = ({ model }: SectionProps) => {
  return (
    <SemanticElements>
      {model?.map((section: ContentfulSection) => {
        return (
          <React.Fragment key={uuid(section.sys.id)}>
            {getSection({ section })}
          </React.Fragment>
        )
      })}
    </SemanticElements>
  )
}

type GetSectionProps = {
  section: ContentfulSection
}

const getSection = ({ section }: GetSectionProps) => {
  switch (section.__typename) {
    case `Contentful_NavigationSection`:
      return (
        <NavigationSection model={section as ContentfulNavigationSection} />
      )

    case `Contentful_TopicSection`:
      return <TopicSection model={section as ContentfulTopicSection} />

    case `Contentful_TextSection`:
      return <TextSection model={section as ContentfulTextSection} />

    default:
      return null
  }
}
