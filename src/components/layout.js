/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(name: { eq: "banner" }) {
        publicURL
      }
    }
  `)
  // const logo = useStaticQuery(graphql`
  //   query logoQuery {
  //     file(name: { eq: "icon" }) {
  //       relativePath
  //     }
  //   }
  // `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteLogo={data.file.publicURL}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
