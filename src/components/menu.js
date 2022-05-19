import React, { Component } from 'react';
import {Nav, NavItem} from 'reactstrap';
import { Link } from "gatsby"
import '../css/style.css';

class Menu extends Component {
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link href="#">Welcome</Link>
          </NavItem>
          <NavItem>
            <Link href="#">About</Link>
          </NavItem>
          <NavItem>
            <Link href="/stories/">Stories</Link>
          </NavItem>
          <NavItem>
            <Link href="#">Contact</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Menu;
