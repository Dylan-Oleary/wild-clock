module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Wild Clock",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wild Clock`,
        short_name: `Wild Clock`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#FFFF00`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: { precachePages: ["/"] }
    }
  ],
};
