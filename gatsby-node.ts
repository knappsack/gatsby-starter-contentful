import * as path from "path"
import type { GatsbyNode } from "gatsby"

type DataProps = {
  contentful: {
    pageCollection: {
      items: {
        sys: {
          id: string
        }
        slug: string
      }[]
    }
    globalsCollection: {
      items: {
        sys: {
          id: string
        }
      }[]
    }
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions

  const result = await graphql<DataProps>(
    `
      {
        contentful {
          pageCollection {
            items {
              sys {
                id
              }
              slug
            }
          }
          globalsCollection {
            items {
              sys {
                id
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pageTemplate = path.resolve(`./src/templates/page.tsx`)
  const pages = result.data?.contentful.pageCollection.items

  pages?.forEach((page, index) => {
    const path = page.slug
    createPage({
      path,
      component: pageTemplate,
      context: {
        pageId: page.sys.id,
        globalsId: result.data?.contentful.globalsCollection.items[0].sys.id,
      },
      /**
       * (DSG) Deferred static generation - page generated at runtime
       * ---
       * The first 100 pages will receive defer: false,
       * the other 900 pages receive defer: true.
       */
      // defer: index + 1 > 100,
    })
  })
}
