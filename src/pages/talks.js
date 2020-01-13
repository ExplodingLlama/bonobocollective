import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ConsciousPlayer from "../components/consciousplayer"

const TalksPod = () => {
  const fetchedClips = useStaticQuery(graphql`
    query {
      allFeedBonoboCollectiveTalks(sort: { fields: [isoDate], order: DESC }) {
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

  const clips = fetchedClips.allFeedBonoboCollectiveTalks.edges.map(clip => {
    return {
      title: clip.node.title,
      audioLink: clip.node.enclosure.url,
      description: clip.node.contentSnippet,
      date: clip.node.isoDate,
    }
  })

  return (
    <Layout style={{ fontFamily: "Lato" }}>
      <SEO title="Bonobo Collective Talks" />
      <h2>Bonobo Collective Talks </h2>
      <p style={{ fontFamily: "Lato" }}>
        A place where we learn new ideas through conversations with people. Topics of discussion include education,
        filmmaking, climbing, science and philosophy
      </p>
      <link
        type="application/rss+xml"
        rel="alternate"
        title="Bonobo Collective Talks"
        href="https://anchor.fm/s/128038a8/podcast/rss"
      />
      <ConsciousPlayer clips={clips} />
    </Layout>
  )
}

export default TalksPod
