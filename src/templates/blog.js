import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import moment from "moment"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      title
      date {
        _seconds
      }
      body
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <SEO title={props.data.post.title} />
      <h1>{props.data.post.title}</h1>
      <p>{moment(props.data.post.date._seconds * 1000).format("YYYY/MM/DD")}</p>
      <div>{props.data.post.body}</div>
    </Layout>
  )
}

export default Blog
