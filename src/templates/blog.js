import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    blogPost(slug: { eq: $slug }) {
      title
      date
      body
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.blogPost.title}</h1>
      <p>{props.data.blogPost.date}</p>
      <div>{props.data.blogPost.body}</div>
    </Layout>
  )
}

export default Blog
