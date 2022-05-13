module.exports = {
  siteMetadata: {
    title: `GUIS site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
  pathPrefix: "/guis-site",
}
