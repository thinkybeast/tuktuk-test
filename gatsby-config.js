// import dotenv from 'dotenv'

// dotenv.config({ path: '.env' })

require("dotenv").config({
  path: `.env`,
})

export default {
  siteMetadata: {
    title: `#dinretning`,
    siteUrl: `https://dinretning.no`,
    description: `Finn din retning!`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-optimize-svgs",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
