import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import moment from "moment"
import SEO from "../components/seo"

export const query = graphql`
  query($video_id: String!) {
    videopost(video_id: { eq: $video_id }) {
      video_id
      info
    }
    youtubeVideo(videoId: { eq: $video_id }) {
      title
      description
      thumbnail {
        url
      }
      videoId
      publishedAt
    }
  }
`

const Video = props => {
  return (
    <Layout>
      <SEO title={props.data.youtubeVideo.title} />
      <h1 style={{ fontFamily: "Lato" }}>{props.data.youtubeVideo.title}</h1>
      <p style={{ fontFamily: "Lato" }}>{moment(props.data.youtubeVideo.publishedAt).format("DD MMM YYYY")}</p>
      <a
        href={`https://youtu.be/${props.data.videopost.video_id}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "black" }}
      >
        <img style={{ borderRadius: "3px" }} src={props.data.youtubeVideo.thumbnail.url} height="300" />
      </a>
      <div style={{ fontFamily: "Lato" }}>{props.data.videopost.info}</div>
    </Layout>
  )
}

export default Video
