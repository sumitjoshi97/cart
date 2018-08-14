import React, {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
// import CartItem from '../Home/Cart/Cartitem/CartItem'
import ContactData from './ContactData/ContactData'
import './Checkout.css'

export class Checkout extends Component {
  render() {
    let summary = null;
    if (this.props.cart) {
      summary = this.props.cart.map(product => {
          return <CheckoutSummary
            key={product.id}
            title={product.title}
            image={product.image_url}
            quantity={product.quantity} />
        })
    }

    return (
      <div className="checkout">
        <h2>Checkout</h2>
        {/* <CheckoutSummary cart={this.props.cart}/> */}
        <div className="checkout__summary">
          {summary}
        </div>
        
        {this.props.totalPrice}
        <ContactData/> {console.log(this.props.totalPrice)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {cart: state.cart.cart, totalPrice: state.cart.totalPrice}
}

export default connect(mapStateToProps, null)(Checkout)