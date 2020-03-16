import React, { Component } from "react";
import './css/responsive.css'
import './css/style.css'
import './css/bootstrap.css'
import './css/header.css'
import './css/font-awesome.min.css'

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      scrolltofix: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.scrollToFixed = this.scrollToFixed.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  scrollToFixed() {
    this.setState({ scrolltofix: !this.state.scrolltofix })

  }

  render() {
      const show = (this.state.menu) ? "show" : "" ;
      const fix = this.props.sticky ? "navbar-fixed-top" : "";
      return (
      <nav className={"main-nav-outer " + fix} id="test">
          <div className="container">
              <ul className={"main-nav " + show}>
                  <li><a href="#service" > Services </a></li>
                  <li><a href="#client">Clients</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#team">About</a></li>
                  <li><a href="https://blog.davestern.com">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
              <a className="res-nav_click" onClick={this.toggleMenu}><i className="fa-bars"></i></a>
          </div>
      </nav>
    )
  }
}

export default Nav
