import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../analytics"
import { ContentfulTopic } from "../contentful/contentful-topic"
import { ContentfulTopicSection } from "../contentful/contentful-topic-section"
import { GridTemplate } from "../layout/grid-template"
import { DataProps } from "./section"
import { Topic } from "./topic"

export type TopicSectionProps = {
  model: ContentfulTopicSection
  data: DataProps
}

export const TopicSection = ({ model, data }: TopicSectionProps) => {
  const {
    abstract,
    action,
    eventId,
    heading,
    icon,
    media,
    reversed,
    theme,
    topicsCollection,
    variant,
  } = model

  const options = {
    abstract,
    action,
    heading,
    icon,
    media,
    reversed,
  }

  return (
    <Analytics area="section" eventId={eventId} variant={variant}>
      <GridTemplate variant={variant}>
        {topicsCollection.items.map((topic: ContentfulTopic, index) => {
          const {
            sys: { id },
          } = model

          return (
            <Topic
              key={createUuid(id)}
              model={topic}
              options={options}
              data={{ ...data, topicIndex: index }}
              variant={variant}
            />
          )
        })}
      </GridTemplate>
    </Analytics>
  )
}
