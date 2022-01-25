import React from 'react'
import { ContentfulTopicSection } from './models/contentful-topic-section'

export type NavigationSectionProps = {
  model: ContentfulTopicSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  return <>{model.variant}</>
}
