import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../css/style.css';

class Menu extends Component {
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Welcome</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stories">Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Menu;
