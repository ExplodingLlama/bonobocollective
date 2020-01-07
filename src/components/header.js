import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.scss"

const Header = ({ siteTitle, siteLogo }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={siteLogo} width={50} height={50} />
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <h1 style={{ padding: `0rem 1.0875rem`, fontFamily: "Montserrat" }}>{siteTitle}</h1>
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/" className="header_link">
          Home
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCeC_NXNnm65PFIPOpPb0U5g"
          className="header_link"
        >
          Video Channel
        </a>
        <Link to="/conscious" className="header_link">
          Understanding Consciousness Podcast
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
