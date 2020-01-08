module.exports = {
  siteMetadata: {
    title: `Bonobo Collective`,
    logo: { link: `/`, image: `/icon.png` },
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Ratandeep Singh`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: [`UCeC_NXNnm65PFIPOpPb0U5g`],
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 50,
      },
    },

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://us-central1-bonobocollective-c451a.cloudfunctions.net/getAllPosts`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        name: `post`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://us-central1-podshare-a436d.cloudfunctions.net/getAllLinks`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        name: `clip`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://anchor.fm/s/10fe1db0/podcast/rss`,
        name: `ConsciousnessPodcast`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //   customFields: {
        //     item: ["itunes:duration"],
        //   },
        // },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
