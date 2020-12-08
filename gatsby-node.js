import path from 'path'

async function TurnCategoriesIntoPages({ graphql, actions }) {
  // 1. get template
  const categoryTemplate = path.resolve('./src/templates/Category.js')
  // 2. get all categories
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `)
  // console.log(data)
  // 3. loop over each cat, create page for it
  data.categories.nodes.forEach(category => {
    // console.log('Creating page for', category.title)
    actions.createPage({
      path: `kategori/${category.slug.current}`,
      component: categoryTemplate,
      context: {
        slug: category.slug.current,
      },
    })
  })
}

export async function createPages(params) {
  // create pages dynamically
  // 1. categories
  await TurnCategoriesIntoPages(params)
  // 2. tiktoks
}
