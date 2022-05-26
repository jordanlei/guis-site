import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import "../css/style.css"
const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
          filter: {frontmatter: {tag : {eq: "event"}}}
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 5
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
    `)

    const { edges: posts } = data.allMarkdownRemark
    const recentevents = posts
    // .slice(0, n) to get only the first n items
    .map(({node: post}) => {
    return (
        <div className="post-preview" key={post.id}>
        <h3>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link> &nbsp;&bull;&nbsp; 
            <i>{post.frontmatter.date}</i>
        </h3>
        <p>{post.excerpt}</p>
        </div>
    )
    })

    return (
      <div className = "section">
          <h1><span className="dark-highlight">RECENT EVENTS</span></h1>
          <br/>
          {recentevents}
      </div>
    )
  }
  export default Layout