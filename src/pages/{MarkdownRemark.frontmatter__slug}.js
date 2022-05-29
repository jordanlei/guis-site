import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  var date = ""
  if (frontmatter.date !== "Invalid date"){
    date = frontmatter.date
  }

  return (
    <Layout>
      <div className = "page" style = {{"backgroundColor": "#021024"}}>
      <div className = "dark section">
        <h1>
            <span className="highlight">
            {frontmatter.title}
            </span>
          </h1>
        <h3>{date}</h3>
      </div>

      <div className = "light section">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`