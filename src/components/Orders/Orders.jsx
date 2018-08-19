import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Order from './Order/Order'
import Spinner from '../UI/Spinner/Spinner'

export class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId)
    console.log(this.props.token)
    console.log(this.props.userId)
  }

  render() {
    let orders = <Spinner />

    if(!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order 
          key={order.id}
          products={order.cart}
          price={order.price}
        />
      ))
    }
    
    return (
      <div>
        {orders}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.order.loading,
    orders: state.order.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Orders)
