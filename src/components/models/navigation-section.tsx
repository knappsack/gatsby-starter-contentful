import * as React from 'react'
import { ContentfulTopicSection } from '../contentful/contentful-topic-section'

export type NavigationSectionProps = {
  model: ContentfulTopicSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  return <>{model.variant}</>
}
