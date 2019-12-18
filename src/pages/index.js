import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AudioPlayer from "react-h5-audio-player"

const IndexPage = () => {
  const clips = useStaticQuery(graphql`
    query {
      allClip {
        edges {
          node {
            audio_link
            title
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <AudioPlayer
        src={clips.allClip.edges[0].node.audio_link}
        onPlay={e => console.log("onPlay")}
        // other props here
      />
    </Layout>
  )
}

export default IndexPage
