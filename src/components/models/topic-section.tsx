import { createUuid } from "../../lib/create-uuid"
import { Analytics } from "../layout/analytics"
import { ContentfulTopic } from "../contentful/contentful-topic"
import type {
  ContentfulTopicSection,
  TopicSectionVariant,
} from "../contentful/contentful-topic-section"
import { GridTemplate } from "../layout/grid-template"
import { GridTemplateStylesProps } from "../layout/grid-template.styles"
import { DataProps } from "./section"
import { Topic } from "./topic"
import { Scroller } from "../layout/scroller"

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

  const gridVariants: Record<
    TopicSectionVariant,
    GridTemplateStylesProps["variant"]
  > = {
    block: "block",
    card: "card",
    featured: "grid",
    headline: "grid",
    quote: "grid",
  }

  const scrollerOptions = {
    scroll: ["card"].includes(variant),
  }

  return (
    <Analytics area="section" eventId={eventId} variant={variant}>
      <GridTemplate variant={gridVariants[variant]}>
        <Scroller variant="content" options={scrollerOptions}>
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
        </Scroller>
      </GridTemplate>
    </Analytics>
  )
}
