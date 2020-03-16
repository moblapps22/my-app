import React from 'react';
import logo from './logo.svg';
import './css/style.css'
import './css/responsive.css'
import Helmet from 'react-helmet'
import Header from './header'
import IntroText from './IntroText'
import ServicesText from './ServicesText'
import ClientsText from './ClientsText'
import ProjectsText from './ProjectsText'
import AboutText from './AboutText'
import ContactText from './ContactText'
import FooterText from './FooterText'
import Nav from './Nav'
import $ from 'jquery';
import  'jquery.easing';
import { Waypoint } from 'react-waypoint'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      stickyNav: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

    _handleWaypointEnter = () => {
      this.setState(() => ({ stickyNav: false }))
    }

    _handleWaypointLeave = (event) => {
        this.setState(() => ({ stickyNav: true }))
        let scrollTop = document.documentElement.scrollTop
        if(scrollTop === 0) {
          this.setState(() => ({ stickyNav: false }))
        }
    }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleWaypointLeave);

    $('.main-nav li a, .servicelink').bind('click', function (event) {
          var $anchor = $(this);
          var top = ($($anchor.attr('href')).offset() || { "top": NaN }).top;
          if (isNaN(top)) {

          } else {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 102
            }, 1500, 'easeInOutExpo');

          }
          event.preventDefault();
      });
      $("#quote-tinybop-readmore").click(function () {
         $("#quote-tinybop").slideToggle();
         return false;
     });

     $("#quote-client2-readmore").click(function () {
         $("#quote-client2").slideToggle();
         return false;
     });

    }

  componentWillUnmount(){

  }

  render() {

    return (
      <div className="App" id="app">
        <Header/>
        <Waypoint
              onEnter={this._handleWaypointEnter}
              onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />
        <IntroText/>
        <ServicesText/>
        <ClientsText/>
        <ProjectsText/>
        <AboutText/>
        <ContactText/>
        <FooterText/>
      </div>
      );
    }

}


export default App;
