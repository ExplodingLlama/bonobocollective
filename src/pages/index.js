import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <p style={{ fontFamily: "Lato" }}>
        We make content on science, philosophy and learning. Our current focus is on information theory, consciousness,
        electromagnetism and neuroscience. Go to one of the tabs above to explore these topics.
      </p>
    </Layout>
  )
}

export default IndexPage
