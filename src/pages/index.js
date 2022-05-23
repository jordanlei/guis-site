import React, { Component } from 'react';
import Layout from "../components/layout.js";
import "../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


class Index extends Component {
    render() {
      return (
        <Layout>
          <div >
              <Parallax pages={1.5} style={{ top: '0', left: '0' }}>
                <div className = "title" style={{color: "white", backgroundColor: "black", height: "100vh"}}>

                <ParallaxLayer
                  offset={0}
                  speed={2.5}s
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className = "namecard">
                    <h1>GROWING UP</h1>
                    <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;IN SCIENCE</h1><br/>
                  </div>
                </ParallaxLayer>
                </div>

                <ParallaxLayer offset={0.9} speed={0.5} style={{ backgroundColor: '#ff6d6d' }} />

                <ParallaxLayer
                  offset={0.7}
                  speed={0.75}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                  }}>
                  <h1>Scroll up</h1>
                </ParallaxLayer>
              </Parallax>
          </div>
        </Layout>
      );
    }
  }

  export default Index;