import React, { Component } from 'react';
import Layout from "../components/layout.js";
import "../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from "../components/about.js"
import RecentEvents from "../components/recentevents.js"


class Index extends Component {
    render() {
      return (
        <Layout>
          <div >
              <Parallax pages={2.3} style={{ top: '0', left: '0', backgroundColor: "black"}}>
                <div className = "title" style={{color: "white", height: "100vh"}}>

                <ParallaxLayer
                  offset={0}
                  speed={2.5}s
                  style={{ display: 'flex', alignItems: 'top' }}>
                  <div className = "namecard">
                    <h1>growing up</h1>
                    <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;in science</h1><br/>
                  </div>
                </ParallaxLayer>
                </div>

                {/* <ParallaxLayer offset={0.8} speed={0.5} style={{ backgroundColor: 'rgba(240, 240, 240, 0.9)' }}/> */}
                <ParallaxLayer
                    offset={0.99}
                    speed={0.6}
                    style={{
                      display: 'flex',
                      alignItems: 'top',
                      color: 'white'
                    }}>
                    <RecentEvents/>
                </ParallaxLayer>
                

                <ParallaxLayer offset={1.5} speed={0.5} style={{ backgroundColor: 'rgba(240, 240, 240, 0.9)' }}/>
                <ParallaxLayer
                    offset={1.5}
                    speed={0.6}
                    style={{
                      display: 'flex',
                      alignItems: 'top',
                    }}>
                    <About/>
                  </ParallaxLayer>
                
              </Parallax>
          </div>
        </Layout>
      );
    }
  }

  export default Index;