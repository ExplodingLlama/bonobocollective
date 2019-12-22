import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AudioPlayer from "../components/audioplayer"

const IndexPage = () => {
  const clips = useStaticQuery(graphql`
    query {
      allClip {
        edges {
          node {
            audio_link
            title
            start_time
            end_time
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <AudioPlayer
        clips={clips.allClip.edges}
        startTime={clips.allClip.edges[0].node.start_time}
        endTime={clips.allClip.edges[0].node.end_time}
      />
    </Layout>
  )
}

export default IndexPage
