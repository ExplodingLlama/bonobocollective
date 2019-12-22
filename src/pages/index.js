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
        src={`${
          clips.allClip.edges[0].node.audio_link
        }#t=${clips.allClip.edges[0].node.start_time.toString()},${clips.allClip.edges[0].node.end_time.toString()}`}
        startTime={clips.allClip.edges[0].node.start_time}
        endTime={clips.allClip.edges[0].node.end_time}
      />
    </Layout>
  )
}

export default IndexPage
