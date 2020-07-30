import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.css'
import logo_mk from '../../assets/logos/mapathon.png'

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo_mk} alt="logo" />
        <h1>MK Analytics</h1>
        <ul>
          <li><Link to="/" className="link" activeClassName="active">Home</Link></li>
          {/* <li><Link to="/gaps" className="link" activeClassName="active">Gap Detection</Link></li> */}
          {/* <li><Link to="/about" className="link" activeClassName="active">About</Link></li> */}
        </ul>
      </header>
    )
  }
}

export default Header
