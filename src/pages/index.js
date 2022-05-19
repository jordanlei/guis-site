import React, { Component } from 'react';
import Layout from "../components/layout.js";
import "../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


class Index extends Component {
    render() {
      return (
        <Layout>
          <div style={{color: "white", backgroundColor: "black", height: "100vh"}}>
              <Parallax pages={3} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                  offset={0}
                  speed={2.5}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className = "namecard title">
                    <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;IN SCIENCE</h1><br/>
                    <h1>GROWING UP</h1>
                  </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0.9} speed={0.5} style={{ backgroundColor: '#ff6d6d' }} />

                <ParallaxLayer
                  offset={0.7}
                  speed={1}
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