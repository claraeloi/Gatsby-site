module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolores enim unde, sapiente vero, dolorem dolorum eligendi assumenda quod repudiandae illo, reiciendis exercitationem odit facilis dignissimos praesentium et iusto possimus.`,
    author: `@gatsbyjs`,
    copyright: `© Copyright - All Rights Reserved`,
    socialMedia: {
      github: 'https://github.com/claraeloi',
      linkedin: 'https://www.linkedin.com/in/claraeloi/'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
