import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Checkout.css'

export class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <h2>Checkout</h2>
        {/* {this.props.cart.totalPrice} */}
        {console.log(this.props.cart.totalPrice)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps, null)(Checkout)