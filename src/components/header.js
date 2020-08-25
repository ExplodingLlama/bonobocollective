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
        padding: `0rem 1.0875rem 1.45rem `,
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
        <img src={siteLogo} />
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/" className="header_link">
          Home
        </Link>
        <Link to="https://blog.wikilearnproductions.com" className="header_link">
          Blog
        </Link>
        <Link to="/videos" className="header_link">
          Videos
        </Link>
        <Link to="/talks" className="header_link">
          Talks
        </Link>
        {
          // <a
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   href="https://www.youtube.com/channel/UCeC_NXNnm65PFIPOpPb0U5g"
          //   className="header_link"
          // >
          //   Video Channel
          // </a>
        }
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
