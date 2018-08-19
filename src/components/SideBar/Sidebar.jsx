import React from 'react'
import Navigation from './Navigation/Navigation'
import Filter from './Filter/Filter' 
import './Sidebar.css'
const Sidebar = props => {
  return (
    <div className="sidebar">
        <Navigation/>
        <div className="sidebar__divider"></div>
        <Filter/>
    </div>
  )
}

export default Sidebar