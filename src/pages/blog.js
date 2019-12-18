import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import moment from "moment"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPost {
        edges {
          node {
            id
            title
            date {
              _seconds
            }
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
      <SEO title="Blog" />
      <ol className={blogStyles.posts}>
        {data.allPost.edges.map(edge => {
          if (edge.node.id === "dummy") {
            return null
          }
          const path = `/blog/${edge.node.slug}`
          return (
            <li className={blogStyles.post}>
              <Link to={path}>
                <h2>{edge.node.title}</h2>
                <p>
                  {moment(edge.node.date._seconds * 1000).format("YYYY/MM/DD")}
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
