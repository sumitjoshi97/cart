import React, { Component } from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux'
import * as actions from "../../../store/actions/index";
import './Filter.css';

class Filter extends Component {
  state = {
    isActive: {}
  }

  handleClick = (size, index) => {
    this.props.onToggleFilter(size);

    let { isActive } = this.state
    isActive[index] = !isActive[index]

    this.setState(() => ({ isActive }))
  }

  render() {
    const sizes = this.props.sizes.map((size, index) => (
      <li
        key={index}
        onPointerDown={() => this.handleClick(size, index)}
        className={classNames('filters__list__item', { 'filters__list__item--active': this.state.isActive[index] })}>
        {size}
      </li>
    ))
    return (
      <div className="filters">
        <h3 className="filters__heading">filter by size</h3>
        <ul className="filters__list">
          {sizes}
        </ul>
        {console.log(this.props.filters)}
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    sizes: state.filter.sizes,
    filters: state.filter.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleFilter: (filter) => dispatch(actions.toggleFilter(filter))
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(Filter)