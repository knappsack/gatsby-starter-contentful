import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Seo } from './seo'
import { Section } from './section'
import { ContentfulPage } from './models/contentful-page'
import { ContentfulGlobals } from './models/contentful-globals'

type PageQuery = {
  contentful: {
    page: ContentfulPage
    globals: ContentfulGlobals
  }
}

const Page = ({
  data: {
    contentful: { page, globals },
  },
}: PageProps<PageQuery, PageContext>) => {
  const model = page.sectionsCollection?.items
  return (
    <>
      <Seo
        customTitle={page.seoTitle || globals.siteTitle || null}
        customDescription={
          page.seoDescription || globals.siteDescription || null
        }
        customKeywords={page.seoKeywords || globals.siteKeywords || null}
        customUrl={page.slug || null}
        customImage={page.seoImage.url || globals.siteImage.url || null}
      />
      <Section model={model} />
      <pre className="bg-gray-100 h-96 overflow-auto">
        {JSON.stringify(page, null, 2)}
      </pre>
    </>
  )
}
export default Page

type PageContext = {
  pageId: string
  globalsId: string
}

export const query = graphql`
  query ($pageId: String!, $globalsId: String!) {
    contentful {
      page(id: $pageId, locale: "en-US") {
        __typename
        sys {
          id
        }
        entryTitle
        slug
        theme
        seoTitle
        seoDescription
        modelVersion
        seoKeywords
        seoImage {
          ...asset
        }
        sectionsCollection(limit: 10) {
          items {
            ...textSection
            ...topicSection
          }
        }
      }
      globals(id: $globalsId) {
        siteAuthor
        siteDescription
        siteKeywords
        siteTitle
        skipToContentHeading
        siteImage {
          ...asset
        }
      }
    }
  }
`
