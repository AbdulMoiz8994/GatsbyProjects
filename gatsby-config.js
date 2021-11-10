module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
   { 
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ijozn59nr204`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: 'yv_pCuN12bVmCjJt_xr6d8-48agdbfJhBxjockUfrkM',
    },
  },
  ],
};
