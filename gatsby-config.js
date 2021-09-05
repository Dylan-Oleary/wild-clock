module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "clock-app",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
