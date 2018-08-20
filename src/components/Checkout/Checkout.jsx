import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import './Checkout.css'

export class Checkout extends Component {
  
  checkoutCancelHandler = () => {
    this.props.history.goBack()
  }
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    let summary = <Redirect to="/"/>

    if (this.props.cart) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
      
      summary = (
        <div className="checkout">
        {purchasedRedirect}
          <CheckoutSummary
            cart={this.props.cart}
            totalPrice={this.props.totalPrice}
            checkoutCancelled={this.checkoutCancelHandler}
            checkoutContinued={this.checkoutContinueHandler} />
          <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
        </div>
      )
    }

    return summary
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart, 
    totalPrice: state.cart.totalPrice,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToProps, null)(Checkout)