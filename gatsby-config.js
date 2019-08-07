require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    title: `10th Planet Huntsville`,
    googleVerification: ``
  },
  plugins: [
    // `gatsby-plugin-glamor`,
    // `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`bangers`]
      }
    },
    `gatsby-plugin-netlify`
  ]
};
