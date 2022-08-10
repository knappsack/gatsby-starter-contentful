import * as React from "react"

import SemanticElements from "../layout/semantic-elements"
import { createUuid } from "../../lib/create-uuid"
import { ContentfulNavigationSection } from "../contentful/contentful-navigation-section"
import { ContentfulTextSection } from "../contentful/contentful-text-section"
import { ContentfulTopicSection } from "../contentful/contentful-topic-section"
import { NavigationSection } from "./navigation-section"
import { TextSection } from "./text-section"
import { TopicSection } from "./topic-section"

type DataRecord<Data extends string> = Partial<Record<Data, number>>
export type DataProps = DataRecord<"sectionIndex" | "topicIndex">

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
      if (Object.entries(section).length === 0) {
        return null
      }

      const {
        sys: { id },
      } = section

      return (
        <React.Fragment key={createUuid(id)}>
          {getSection({ section, data: { sectionIndex: index } })}
        </React.Fragment>
      )
    })}
  </SemanticElements>
)

type GetSectionProps = {
  section: ContentfulSection
  data: DataProps
}

const getSection = ({ section, data }: GetSectionProps) => {
  switch (section.__typename) {
    case `Contentful_NavigationSection`:
      return (
        <NavigationSection model={section as ContentfulNavigationSection} />
      )

    case `Contentful_TopicSection`:
      return (
        <TopicSection model={section as ContentfulTopicSection} data={data} />
      )

    case `Contentful_TextSection`:
      return <TextSection model={section as ContentfulTextSection} />

    default:
      return null
  }
}
