import React, { Fragment } from 'react'
import { graphql, PageProps } from 'gatsby'
import { ContentfulRichTech } from '../components/contentful-rich-text'
import { Seo } from '../components/seo'

const Section = (props: Record<string, unknown>) => {
  const { variation } = props
  return (
    <section data-analytics-region={variation}>
      {variation}
    </section>
  )
}

const getSection = (section: Record<string, any>) => {
  switch (section.__typename) {
    case `ContentfulNavigationSection`:
      return <Section {...section} />

    case `ContentfulTopicSection`:
      return <Section {...section} />

    case `ContentfulTextSection`:
      const { text, variation } = section
      return <ContentfulRichTech richText={text} variation={variation} />

    case `ContentfulExerciseSection`:
      return <Section {...section} />

    default:
      return null
  }
}

type ContentfulQueryProps = {
  contentfulPage: {
    __typename: string
    slug: string
    title: string
    seoTitle: string
    seoDescription: string
    seoKeywords: string | string[]
    sections: Record<string, any>
  },
  contentfulGlobals: {
    __typename: string
    siteAuthor: string
    siteDescription: string
    siteHeading: string
    siteKeywords: string | string[]
  }
}

type LocaleLookUpInfo = { translationStrings: string }
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
        ? page.sections.map((section: Record<string, any>, index: number) => {
            return (
              <Fragment key={index + section.__typename}>
                {getSection(section)}
              </Fragment>
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
