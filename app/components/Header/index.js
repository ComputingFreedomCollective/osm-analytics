import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.css'

class Header extends Component {
  render() {
    return (
      <header>
        <img src="https://tm.icfoss.org/static/media/mapathon.6ff432a8.png" alt="logo" />
        <h1>Mapathon Keralam</h1>
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
