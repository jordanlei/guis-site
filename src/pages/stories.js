import React from "react"
import { Link, graphql } from "gatsby"
import "../css/style.css"
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="posts">
      {posts
        // .slice(0, n) to get only the first n items
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post}) => {
          return (
            <div className="post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </div>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: {tag : {eq: "story"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            tag
          }
        }
      }
    }
  }
`