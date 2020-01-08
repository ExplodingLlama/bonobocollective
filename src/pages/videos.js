import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/videos.scss"

const Videos = () => {
  const fetchedVideos = useStaticQuery(graphql`
    query {
      allYoutubeVideo {
        edges {
          node {
            title
            description
            thumbnail {
              url
            }
            videoId
            publishedAt
          }
        }
      }
    }
  `)

  const videos = fetchedVideos.allYoutubeVideo.edges.map(video => {
    return {
      title: video.node.title,
      thumbUrl: video.node.thumbnail.url,
      videoId: video.node.videoId,
      date: video.node.publishedAt,
      description: video.node.description,
    }
  })

  return (
    <Layout style={{ fontFamily: "Lato" }}>
      <SEO title="Bonobo Collective Videos" />
      <h2 style={{ fontFamily: "Lato" }}>Bonobo Collective Videos</h2>
      <div>
        {videos.map(video => {
          return (
            <div className="videobox" key={video.videoId}>
              <a
                href={`https://youtu.be/${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{video.title}</div>
                <p style={{ fontSize: "10px" }}>{moment(video.date).format("DD MMM YYYY")}</p>
                <div className="videobox_inner">
                  <div className="videobox_left">
                    <img src={video.thumbUrl} height="100" />
                  </div>
                  <div className="videobox_right">{video.description}</div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Videos
