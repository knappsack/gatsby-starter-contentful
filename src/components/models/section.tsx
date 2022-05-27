import * as React from "react"

import SemanticElements from "../layout/semantic-elements"
import { createUuid } from "../../lib/create-uuid"
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

export const Section = ({ model }: SectionProps) => (
  <SemanticElements>
    {model?.map((section: ContentfulSection, index) => {
      const {
        sys: { id },
      } = section

      return (
        <React.Fragment key={createUuid(id)}>
          {getSection({ section, index })}
        </React.Fragment>
      )
    })}
  </SemanticElements>
)

type GetSectionProps = {
  section: ContentfulSection
  index: number
}

const getSection = ({ section, index }: GetSectionProps) => {
  switch (section.__typename) {
    case `Contentful_NavigationSection`:
      return (
        <NavigationSection model={section as ContentfulNavigationSection} />
      )

    case `Contentful_TopicSection`:
      return (
        <TopicSection
          model={section as ContentfulTopicSection}
          sectionIndex={index}
        />
      )

    case `Contentful_TextSection`:
      return <TextSection model={section as ContentfulTextSection} />

    default:
      return null
  }
}
