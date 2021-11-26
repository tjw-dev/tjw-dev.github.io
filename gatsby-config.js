const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const postcssNested = require("postcss-nested")

module.exports = {
  siteMetadata: {
    title: `tjw.DEV`,
    description: `Minimal maintnance landing page for some kind of web presence built with <a href="https://www.gatsbyjs.com/">Gatsby</a>, <a href="https://github.com/4Catalyzer/astroturf">Astroturf</a>, and <a href="https://tailwindcss.com/">Tailwind</a>.`,
    author: `@thejustinwalsh`,
    image: `og-image.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `tjw.DEV LLC`,
        short_name: `tjw.DEV`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss, autoprefixer, postcssNested],
      },
    },
    {
      resolve: `gatsby-plugin-astroturf`,
      options: {
        enableDynamicInterpolations: true,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        openAnalyzer: false,
        generateStatsFile: true,
      },
    },
  ],
}
