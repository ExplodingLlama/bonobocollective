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
      <h2 style={{ fontFamily: "Lato" }}>Videos by Bonobo Collective</h2>
      <p style={{ fontFamily: "Lato" }}>
        What is Information? What's Entropy? How do you compress a data? What is the human mind made of? What is touch?
        These questions and many others are what stimulate us to make these videos.
      </p>
      <div>
        {videos.map(video => {
          return (
            <div className="videobox" key={video.videoId}>
              <Link
                to={`https://youtu.be/${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>{video.title}</div>
                <div style={{ fontSize: "10px" }}>{moment(video.date).format("DD MMM YYYY")}</div>
                <div className="videobox_inner">
                  <div className="videobox_left">
                    <a
                      href={`https://youtu.be/${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img style={{ borderRadius: "3px" }} src={video.thumbUrl} height="100" />
                    </a>
                  </div>
                  <div className="videobox_right">{video.description}</div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Videos
