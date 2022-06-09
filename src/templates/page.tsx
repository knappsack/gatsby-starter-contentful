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
    <React.Fragment>
      <Seo
        description={
          page.seoDescription || globals.siteDescription || undefined
        }
        image={page.seoImage?.url || globals.siteImage?.url || undefined}
        keywords={page.seoKeywords || globals.siteKeywords || undefined}
        title={page.seoTitle || globals.siteTitle || undefined}
        url={page.slug || undefined}
      />
      <Section model={section} />
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
