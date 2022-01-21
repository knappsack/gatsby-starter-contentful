import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Seo } from '../components/seo'
import { getSection, SectionProps } from '../components/section'
import { AnalyzeUserBehavior } from '../lib/analyze-user-behavior'

type ContentfulPage = {
  __typename: string
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string | string[]
  sections: Record<string, any>
}

type ContentfulGlobals = {
  __typename: string
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string | string[]
}

type ContentfulQueryProps = {
  contentfulPage: ContentfulPage
  contentfulGlobals: ContentfulGlobals
}

type LocaleLookUpInfo = { node_locale: string }
type ContentfulPageProps = PageProps<ContentfulQueryProps, LocaleLookUpInfo>

const ContentfulPage = (props: ContentfulPageProps) => {
  const page = props.data.contentfulPage
  const globals = props.data.contentfulGlobals
  return (
    <>
      <Seo
        customTitle={page.seoTitle || globals.siteHeading}
        customDescription={page.seoDescription || globals.siteDescription}
        customKeywords={page.seoKeywords || globals.siteKeywords}
        customUrl={page.slug || undefined}
      />
      {page.sections
        ? page.sections.map((section: SectionProps, index: number) => {
            return (
              <AnalyzeUserBehavior key={index} variation={section.variation}>
                {getSection(section)}
              </AnalyzeUserBehavior>
            )
          })
        : null}
      <pre className="bg-gray-100 h-96 overflow-auto">
        {JSON.stringify(page, null, 2)}
      </pre>
    </>
  )
}
export default ContentfulPage

export const query = graphql`
  query ($id: String, $globalsId: String) {
    contentfulPage(id: { eq: $id }) {
      __typename
      slug
      title
      seoTitle
      seoDescription
      seoKeywords
      sections {
        ... on ContentfulTopicSection {
          __typename
          id
          variation
        }
        ... on ContentfulTextSection {
          __typename
          id
          variation
          text {
            raw
          }
        }
        ... on ContentfulNavigationSection {
          __typename
          id
          variation
        }
        ... on ContentfulExerciseSection {
          __typename
          id
          variation
        }
      }
    }
    contentfulGlobals(id: { eq: $globalsId }) {
      __typename
      siteAuthor
      siteDescription
      siteHeading
      siteKeywords
    }
  }
`
