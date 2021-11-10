module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "accessToken",
        spaceId: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
