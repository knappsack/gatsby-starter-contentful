import React from 'react'
import { SectionProps } from './section'

export type ContentfulNavigationSectionProps = {
  section: SectionProps
}

export const ContentfulNavigationSection = ({ section }: ContentfulNavigationSectionProps) => {
  console.log(section)
  return <>{section.variation}</>
}
