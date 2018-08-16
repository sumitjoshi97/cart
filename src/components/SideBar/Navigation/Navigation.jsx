import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'

export class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/" className="nav__item">home</NavLink>
        <NavLink to="/orders" className="nav__item">orders</NavLink>
        <NavLink to="/auth" className="nav__item">signin</NavLink>        
      </div>
    )
  }
}

export default Navigation
