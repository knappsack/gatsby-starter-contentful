import React from 'react'
import { ContentfulSection } from './contentful-section'

export type ContentfulNavigationSectionProps = {
  section: ContentfulSection
}

export const ContentfulNavigationSection = ({ section }: ContentfulNavigationSectionProps) => {
  console.log(section)
  return <>{section.variant}</>
}
