import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../analytics"
import { ContentfulTopic } from "../contentful/contentful-topic"
import { ContentfulTopicSection } from "../contentful/contentful-topic-section"
import { GridTemplate } from "../layout/grid-template"
import { Topic } from "./topic"

export type TopicSectionProps = {
  model: ContentfulTopicSection
}

export const TopicSection = ({ model }: TopicSectionProps) => {
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
    <Analytics area="section" eventId={eventId} theme={theme} variant={variant}>
      <GridTemplate variant={variant}>
        {topicsCollection.items.map((topic: ContentfulTopic) => {
          const {
            sys: { id },
          } = model

          return (
            <Topic
              key={createUuid(id)}
              model={topic}
              options={options}
              variant={variant}
            />
          )
        })}
      </GridTemplate>
    </Analytics>
  )
}
