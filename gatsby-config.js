module.exports = {
  siteMetadata: {
    title: `Bonobo Collective`,
    logo: { link: `https://bonobocollective.com`, image: `/icon.png` },
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
      resolve: `gatsby-source-firestore`,
      options: {
        credential: require(`./credentials.json`),
        appConfig: {
          apiKey: "AIzaSyCN3ePr0FpQBojrEiBCsWXP3wgH7BeAw8w",
          authDomain: "bonobocollective-c451a.firebaseapp.com",
          databaseURL: "https://bonobocollective-c451a.firebaseio.com",
          projectId: "bonobocollective-c451a",
          storageBucket: "bonobocollective-c451a.appspot.com",
          messagingSenderId: "997253542258",
          appID: "1:997253542258:web:39aef278deadd71493adeb",
        },
        types: [
          {
            type: `BlogPost`,
            collection: `blogposts`,
            map: doc => ({
              title: doc.title,
              publishedOn: doc.publishedOn,
              slug: doc.slug,
              body: doc.body,
            }),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
