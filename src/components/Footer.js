import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <ul className="foo-nav">
            <li><Link to=''>Home</Link></li>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>Ventures</Link></li>
            <li><Link to=''>Contact</Link></li>
          </ul>
          <div className="foo-subscribe">
            <input className="form-control" placeholder="Enter your email here" />
            <button className="btn">Go</button>
          </div>
          <ul className="foo-socials">
            <li><Link to=''><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to=''><i className="fab fa-twitter"></i></Link></li>
            <li><Link to=''><i className="fab fa-youtube"></i></Link></li>
            <li><Link to=''><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer


