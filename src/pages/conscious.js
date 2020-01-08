import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ConsciousPlayer from "../components/consciousplayer"

const ConsciousPod = () => {
  const fetchedClips = useStaticQuery(graphql`
    query {
      allFeedConsciousnessPodcast(sort: { fields: [isoDate], order: DESC }) {
        edges {
          node {
            title
            enclosure {
              url
            }
            isoDate
            contentSnippet
          }
        }
      }
    }
  `)

  const clips = fetchedClips.allFeedConsciousnessPodcast.edges.map(clip => {
    return {
      title: clip.node.title,
      audioLink: clip.node.enclosure.url,
      description: clip.node.contentSnippet,
      date: clip.node.isoDate,
    }
  })

  return (
    <Layout style={{ fontFamily: "Lato" }}>
      <SEO title="Understanding Consciousness Podcast" />
      <h2>Understanding Consciousness Podcast </h2>
      <p style={{ fontFamily: "Lato" }}>A pursuit to understand the inner workings of the mind</p>
      <link
        type="application/rss+xml"
        rel="alternate"
        title="Understanding Consciousness Podcast"
        href="https://anchor.fm/s/10fe1db0/podcast/rss"
      />
      <ConsciousPlayer clips={clips} />
    </Layout>
  )
}

export default ConsciousPod
