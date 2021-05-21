module.exports = {
  siteMetadata: {
    title: `Justin Zhang's Portfolio`,
    description: `I'm a computer science and business student with a background in design and videography. Take a look through my past experiences and projects that I'm most proud of!`,
    author: `@justinnzhang`,
    siteUrl: `https://www.justinzhang.ca`,
    keywords: `justin zhang, intern, product manager, software engineer, designer, videographer, computer science and business student, student, Western university, ivey business school`,
    image: `/img/site-banner.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Zhang's Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://justinzhang.ca",
        sitemap: "https://justinzhang.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-175520576-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
