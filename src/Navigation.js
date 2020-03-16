import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import animate from '../assets/css/responsive.css';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}  >
        <Scrollspy items={ ['Services', 'Clients', 'Projects', 'About','Blog','Contact'] } currentClassName="is-active" offset={-300}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"></Navbar.Brand>
        </Navbar>
          <ul class="main-nav">
            <li >
                <Scroll type="id" element="services">
                    <a href="#">Services</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="clients">
                    <a href="#">Clients</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="projects">
                    <a href="#">Projects</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Blog</a>
                </Scroll>
            </li>
            </ul>
        </Scrollspy>
    </nav>


)

export default Navigation
