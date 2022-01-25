import React from 'react'
import { ContentfulTopicSection } from './models/topic-section-fragment'

export type NavigationSectionProps = {
  model: ContentfulTopicSection
}

export const NavigationSection = ({ model }: NavigationSectionProps) => {
  return <>{model.variant}</>
}
