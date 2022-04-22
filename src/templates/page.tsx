import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { Seo } from "../components/layout/seo"
import { Section } from "../components/models/section"
import { ContentfulPage } from "../components/contentful/contentful-page"
import { ContentfulGlobals } from "../components/contentful/contentful-globals"

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
  const section = page.sectionsCollection?.items

  return (
    <>
      <Seo
        description={
          page.seoDescription || globals.siteDescription || undefined
        }
        image={page.seoImage.url || globals.siteImage.url || undefined}
        keywords={page.seoKeywords || globals.siteKeywords || undefined}
        title={page.seoTitle || globals.siteTitle || undefined}
        url={page.slug || undefined}
      />
      <Section model={section} />
    </>
  )
}
export default Page

type PageContext = {
  pageId: string
  globalsId: string
}

export const query = graphql`
  query ($pageId: String!, $globalsId: String!, $preview: Boolean) {
    contentful {
      page(id: $pageId, locale: "en-US", preview: $preview) {
        __typename
        sys {
          id
        }
        entryTitle
        slug
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
      globals(id: $globalsId, preview: $preview) {
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
