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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
                blocks: {
                    snippet: {
                      classes: "snippet"
                    },
                    danger: {
                      classes: "danger",
                    },
                },
            },
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
          sources: {
              default: {
                  type: "htmlQuery",
                  sourceField: "html",
                  excerptSelector: "html > *",
                  ignoreSelector: "img, .gatsby-highlight, h3, h2",
                  elementReplacements: [
                      {
                          selector: "h6",
                          replaceWith: "strong"
                      },
                      {
                          selector: "h5",
                          replaceWith: "h6"
                      },
                  ],
                  truncate: {
                      length: 50,
                      byWords: true,
                      ellipsis: "…"
                  },
              }
          },
          sourceSets: {
              markdownHtml: [
                  "default"
              ]
          },
          excerpts: {
              snippet: {
                  type: "html",
                  nodeTypeSourceSet: {
                      MarkdownRemark: "markdownHtml"
                  }
              }
          }
      },
    }
  ],
  pathPrefix: "/guis-site",
}
