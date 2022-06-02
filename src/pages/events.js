import React, {Component, useState, useEffect, startTransition} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { Button, Row, Col } from 'reactstrap';
import Layout from '../components/layout'
import "../css/style.css"

class Events extends Component {
  constructor (data, props) {
    super(props);
    super(data);
    const { edges: eventdata } = data.allMarkdownRemark
    this.state = {
      events: eventdata, 
      eventdata: eventdata
    };

    this.showNYU = this.showNYU.bind(this);
    this.reset = this.reset.bind(this);
  }

  showNYU(){
    this.setState({events: this.state.events.filter(p => p.node.frontmatter.tags.includes("nyu"))})
  }

  reset(){
    this.setState({events: this.state.eventdata})
  }

  render() {
    return (
      <Layout>
      <div className = "page" style = {{backgroundColor: "#021024"}}>
      <div className = "section dark" style = {{paddingRight: "5vw"}}>
          <h1><span className="highlight">NYU Events</span></h1>
          <br/>
          <h4>Filter by: 
          <Button size="lg" onClick={() => this.showNYU()}>NYU Events</Button>
          <Button size="lg" onClick={() => this.reset()}>Reset</Button>
          </h4>

          <Row style={{paddingTop: "50px"}}>
            <Col xs={4}><h4>Date</h4></Col>
            <Col xs={6}><h4>Event</h4></Col>
            <Col xs={2}><h4>Location</h4></Col>
          </Row>
          <hr style = {{height: 3}}/>
          {
            this.state.events.map(({node: post}) => {
              if (post.frontmatter.tags.includes("year"))
              {
                return (<Row>
                  <Col xs={3}>{post.frontmatter.title}</Col>
                </Row>
                )
              }
              else{
                return (
                  <Row>
                    <Col xs={4}><h4>{post.frontmatter.date}</h4></Col>
                    <Col xs={6}><h4><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></h4></Col>
                    <Col xs={2}><h4>{post.frontmatter.location}</h4></Col>
                  </Row>
                )
                }
              }
            )
          }
      </div>
      </div>
      </Layout>
    )
    
  }
}

const AllEvents = (props) => 
  <StaticQuery query={graphql`
  query{
    allMarkdownRemark(
        filter: {frontmatter: {tags : {in: "event"}}}
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
            tags
            location
          }
        }
      }
    }
  }
  `}
  render = {data => <Events{...data}{...props} />} 
  />

export default AllEvents;