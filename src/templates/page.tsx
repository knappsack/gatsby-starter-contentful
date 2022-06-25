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
  const sections = page.sectionsCollection?.items

  return (
    <React.Fragment>
      <Seo
        author={globals.siteAuthor}
        description={page.seoDescription || globals.siteDescription}
        image={page.seoImage?.url || globals.siteImage?.url}
        keywords={page.seoKeywords || globals.siteKeywords}
        templateTitle={globals.siteTitle}
        title={page.seoTitle || globals.siteTitle}
        siteUrl={page.slug}
      />
      <Section model={sections} />
    </React.Fragment>
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
        ...page
      }
      globals(id: $globalsId, preview: $preview) {
        ...globals
      }
    }
  }
`
/** (SSR) Server-side renders at runtime (uses getServerData) */
// export async function getServerData() {}

/** (DSG) Deferred static generation - page generated at runtime */
// export async function config() {
//   // @ts-ignore
//   return ({ params }) => {
//     return {
//       defer: true
//     }
//   }
// }
