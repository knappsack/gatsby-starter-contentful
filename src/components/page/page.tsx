import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Seo } from '../seo'
import { getSection, ContentfulSection } from '../contentful-section'
import { AnalyzeUserBehavior } from '../../lib/analyze-user-behavior'
import { ContentfulPage } from './page-fragment'
import { ContentfulGlobals } from './globals-fragment'

type PageQuery = {
  contentful: {
    page: ContentfulPage
    globals: ContentfulGlobals
  }
}

const Page = (props: PageProps<PageQuery>) => {
  const page = props.data.contentful.page
  const globals = props.data.contentful.globals
  return (
    <>
      <Seo
        customTitle={page.seoTitle || globals.siteTitle}
        customDescription={page.seoDescription || globals.siteDescription}
        customKeywords={page.seoKeywords || globals.siteKeywords}
        customUrl={page.slug || undefined}
      />
      {page.sectionsCollection.items
        ? page.sectionsCollection.items.map((section: ContentfulSection, index: number) => {
            console.log(section)
            return (
              <AnalyzeUserBehavior
                key={index}
                variation={section.variant}
                eventId={section.eventId}
              >
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
export default Page

export const pageQuery = graphql`
  query ($pageId: String!, $globalsId: String!) {
    contentful {
      page(id: $pageId) {
        ...Page
      }
      globals(id: $globalsId) {
        ...Globals
      }
    }
  }
`
