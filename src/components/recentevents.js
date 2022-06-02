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
            snippet
            id
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              tags
              location
              time
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
        <div className="post-preview" key={post.id} style={{paddingTop:"10px", paddingBottom:"10px"}}>
        <h3>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </h3>
        <h4>
        <i>{post.frontmatter.date} &nbsp;&nbsp;&nbsp;  {post.frontmatter.time} &nbsp;&nbsp;&nbsp; {post.frontmatter.location} </i>
        </h4>
        <div className="snippet" dangerouslySetInnerHTML={{ __html: post.snippet}} />
        </div>
    )
    })

    return (
      <section id="recent-events">
      <div className = "dark section" style={{paddingTop: "200px"}}>
        <Parallax translateY={["0px", "-200px"]}>
          <h1><span className="highlight">RECENT EVENTS</span></h1>
          <h3>
          <Link to={"/events/"}>See All Events &#8594;</Link>
          </h3>
          <br/>
          {recentevents}
          <br/><br/>
        </Parallax>
      </div>
      </section>
    )
  }
  export default Layout