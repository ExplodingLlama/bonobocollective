/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const videoPageTemplate = path.resolve("./src/templates/video.js")

  const blogRes = await graphql(`
    query {
      allPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const videoPostRes = await graphql(`
    query {
      allVideopost {
        edges {
          node {
            id
            video_id
          }
        }
      }
    }
  `)

  blogRes.data.allPost.edges.forEach(edge => {
    if (edge.node.id === "dummy") {
      return
    }
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  videoPostRes.data.allVideopost.edges.forEach(edge => {
    if (edge.node.id === "dummy") {
      return
    }
    createPage({
      component: videoPageTemplate,
      path: `/video/${edge.node.video_id}`,
      context: {
        video_id: edge.node.video_id,
      },
    })
  })
}
