import React, {Component} from 'react'
import classNames from 'classnames';
import Navigation from './Navigation/Navigation'
import Filter from './Filter/Filter'
import './Sidebar.css'
class Sidebar extends Component {
  state = {
    isSidebarOpen: false
  }

  onToggleSidebar = () => {
    let {isSidebarOpen} = this.state
    this.setState({ isSidebarOpen: !isSidebarOpen })
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <Navigation/>
          <div className="sidebar__divider"></div>
          <Filter/>
        </div>

        <div 
          className={classNames("sidebar sidebar__toggle", {"sidebar__toggle-open": this.state.isSidebarOpen})} >
          <button className="sidebar__toggle__btn" onPointerDown={this.onToggleSidebar}>+</button>
          <Navigation/>
          <div className="sidebar__divider"></div>
          <Filter/>
        </div>
      </div>
    )
  }
} 

export default Sidebar