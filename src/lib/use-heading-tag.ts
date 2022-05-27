import type { TopicSectionVariant } from "../components/contentful/contentful-topic-section"
import type { DataProps } from "../components/models/section"

export const useHeadingTag = (
  data: DataProps,
  variant: TopicSectionVariant
) => {
  let headingTag = "h3"

  if (
    ["featured", "headline"].includes(variant) &&
    data.sectionIndex === 1 &&
    data.topicIndex === 0
  ) {
    headingTag = "h1"
  } else if (["featured", "headline"].includes(variant)) {
    headingTag = "h2"
  }

  if (["quote"].includes(variant)) {
    headingTag = "p"
  }

  return headingTag
}
