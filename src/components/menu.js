import React, { Component } from 'react';
import {
  Nav, 
  NavItem, 
  UncontrolledDropdown, 
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import {Link, withPrefix} from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import '../css/style.css';
import "../css/mobile.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  

  render() {
    var menuitems = <Nav vertical>
          <NavItem>
            <Link to={"/"}>Welcome</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#recent-events"}>Events</Link>
          </NavItem>
          <NavItem>
            <Link to={"/#about"}>About</Link>
          </NavItem>
          <NavItem>
            <Link to={"/global/"}>Global</Link>
          </NavItem>
          <NavItem>
            <Link to={"/stories/"}>Stories</Link>
          </NavItem>
          <NavItem>
            <Link to={"/participate/"}>Participate</Link>
          </NavItem>
        </Nav>

    return (
      <div>
      <div className = "mobile-only topnav">
          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <StaticImage src="../images/menu-button.png" style={{height: "30px", width:"30px"}}/>   
                </DropdownToggle>
                <DropdownMenu right>
                  {menuitems}
                </DropdownMenu>
          </UncontrolledDropdown>
      </div>
      <div className = "sidenav desktop-only">
        {menuitems}
      </div>
      </div>
    );
  }
}

export default Menu;
