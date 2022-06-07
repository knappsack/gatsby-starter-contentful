import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../layout/analytics"
import { ContentfulTopic } from "../contentful/contentful-topic"
import { ContentfulTopicSection } from "../contentful/contentful-topic-section"
import { GridTemplate } from "../layout/grid-template"
import { GridTemplateStylesProps } from "../layout/grid-template.styles"
import { DataProps } from "./section"
import { Topic } from "./topic"
import { ScrollerContent } from "../layout/scroller-content"

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

  let gridVariant: GridTemplateStylesProps["variant"] = "default"

  if (["block"].includes(variant)) {
    gridVariant = "block"
  }

  if (["card"].includes(variant)) {
    gridVariant = "card"
  }

  return (
    <Analytics area="section" eventId={eventId} variant={variant}>
      <GridTemplate variant={gridVariant}>
        <ScrollerContent variant={variant}>
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
        </ScrollerContent>
      </GridTemplate>
    </Analytics>
  )
}
