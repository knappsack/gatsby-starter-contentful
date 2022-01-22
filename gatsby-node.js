const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(
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

  const pageTemplate = path.resolve(`./src/components/page/page.tsx`)
  result.data.contentful.pageCollection.items.forEach((page) => {
    const path = page.slug
    createPage({
      path,
      component: pageTemplate,
      context: {
        pageId: page.sys.id,
        globalsId: result.data.contentful.globalsCollection.items[0].sys.id,
      },
    })
  })
}
