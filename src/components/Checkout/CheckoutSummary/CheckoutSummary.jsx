import React from 'react'
import './CheckoutSummary.css';

const CheckoutSummary = props => {
  let products = null

  if (props.cart) {
    products = props.cart.map(product => {
      return (
        <div className="checkout-summary__product">
          <img src={product.image} alt="order" className="checkout-summary__product__image" />
          <div className="checkout-summary__product__info">
            <div className="checkout-summary__product__info__title">{product.title}</div>
            <div className="checkout-summary__product__info__quantity">x {product.quantity}</div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="checkout-summary">
      <div className="checkout-summary__list">
        {products}
      </div>
      <div className="checkout-summary__price">Total Price: {props.totalPrice.toFixed(2)}</div>
      <button 
        className="checkout-summary__cancel-btn"
        onClick={props.checkoutCancelled}>CANCEL</button>
      <button 
        className="checkout-summary__continue-btn"
        onClick={props.checkoutContinued}>CONTINUE</button> 
    </div>
  )
}

export default CheckoutSummary