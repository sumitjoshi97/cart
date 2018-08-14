import React, { Component } from 'react'
import classNames from 'classnames';
import './Filter.css';

class Filter extends Component {
  state = {
    isActive: {}
  }

  handleClick = (size, index) => {
    this.props.setFilters(size);
   
    let {isActive} = this.state
    isActive[index]= !isActive[index]
    
    this.setState(() => ({isActive}))
  }

  render() {
    const sizes = this.props.sizes.map((size, index) => (
      <li
        key={index}
        onPointerDown={()=>this.handleClick(size, index)}
        className={classNames('filters__list__item', {'filters__list__item--active': this.state.isActive[index]})}>
          {size}
      </li>
    ))
    return (
      <div className="filters">
           <h4>filter by size</h4>
        <ul className="filters__list">
          {sizes}
        </ul>

      </div>
    )
  }
}

export default Filter