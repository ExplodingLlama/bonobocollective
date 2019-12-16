import React from "react"

import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allBlogPost {
        edges {
          node {
            title
            date
            slug
            body
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allBlogPost.edges.map(edge => {
          const path = `/blog/${edge.node.slug}`
          return (
            <li className={blogStyles.post}>
              <Link to={path}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
