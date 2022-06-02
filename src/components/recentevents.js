import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Parallax } from "react-scroll-parallax"
import "../css/style.css"

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(
          filter: {frontmatter: {tags : {in: "event"}}}
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
        ){
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              tags
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
        <p>{post.excerpt.replace('Official Story', '')}</p>
        </div>
    )
    })

    return (
      <div className = "dark section">
        <Parallax translateY={["0px", "-200px"]}>
          <h1><span className="highlight">RECENT EVENTS</span></h1>
          <br/>
          {recentevents}
          <br/><br/>
          <h3>
          <Link to={"/events/"}>See All Events &#8594;</Link>
          </h3>

        </Parallax>
      </div>
    )
  }
  export default Layout