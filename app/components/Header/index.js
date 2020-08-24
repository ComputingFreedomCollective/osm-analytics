import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.css'
import logo_mk from '../../assets/logos/mapathon.png'

class Header extends Component {
  render() {
    return (
      <header>
        {/* <img src={logo_mk} alt="logo" /> */}
        <h1>Mapathon Keralam Campaign Progress</h1>
      </header>
    )
  }
}

export default Header
