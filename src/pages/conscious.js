import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AudioPlayer from "../components/audioplayer"

const IndexPage = () => {
  const fetchedClips = useStaticQuery(graphql`
    query {
      allFeedConsciousnessPodcast(sort: { fields: [isoDate], order: DESC }) {
        edges {
          node {
            title
            enclosure {
              url
            }
            pubDate
          }
        }
      }
    }
  `)

  const clips = fetchedClips.allFeedConsciousnessPodcast.edges.map(clip => {
    return {
      title: clip.node.title,
      audioLink: clip.node.enclosure.url,
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <AudioPlayer clips={clips} />
    </Layout>
  )
}

export default IndexPage
