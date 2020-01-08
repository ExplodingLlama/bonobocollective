import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import AudioPlayer from "../components/audioplayer"

const IndexPage = () => {
  // const fetchedClips = useStaticQuery(graphql`
  //   query {
  //     allClip {
  //       edges {
  //         node {
  //           audio_link
  //           title
  //           start_time
  //           end_time
  //         }
  //       }
  //     }
  //   }
  // `)
  //
  // const clips = fetchedClips.allClip.edges.map(clip => {
  //   return {
  //     title: clip.node.title,
  //     audioLink: clip.node.audio_link,
  //     startTime: clip.node.start_time,
  //     endTime: clip.node.end_time,
  //   }
  // })

  return (
    <Layout>
      <SEO title="Home" />
      <p style={{ fontFamily: "Lato" }}>We make content on science and philosophy. Go to one of the tabs above.</p>
      {
        // <AudioPlayer clips={clips} />}
      }
    </Layout>
  )
}

export default IndexPage
