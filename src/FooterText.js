import React from 'react'
import './css/header.css'
import './css/responsive.css'
import './css/animate.css'
import './css/style.css'
import './css/bootstrap.css'
import './css/font-awesome.min.css'

class FooterText extends React.Component {

  render() {
    return (
      <footer className="footer">
          <div className="container">
              <span className="copyright">&copy; Dave Stern Consulting. All Rights Reserved</span>
              <span className="copyright">Dave Stern Consulting <a href="http://www.stefanielueck-design.de/en/">Logo by Stefanie Lueck</a></span>
          </div>
      </footer>
      )
  }
}

export default FooterText
