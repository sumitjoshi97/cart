import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navigation.css'

export class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/" className="nav__item">home</NavLink>
        

        {
          !this.props.isAuth
            ? <NavLink to="/auth" className="nav__item">signin</NavLink>
            : <div>
                <NavLink to="/orders" className="nav__item">orders</NavLink>
                <NavLink to="/logout" className="nav__item">logout</NavLink>
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Navigation)