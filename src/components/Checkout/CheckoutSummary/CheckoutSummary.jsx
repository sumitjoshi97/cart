import React from 'react'
import './CheckoutSummary.css';

const CheckoutSummary = props => {
  let products = null

  if (props.cart) {
    products = props.cart.map(product => {
      return (
        <div className="checkout-summary__product" key={product.id}>
          <img src={product.image_url} alt="order" className="checkout-summary__product__image" />
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
      <h2 className="checkout-summary__price">Total Price: USD {props.totalPrice.toFixed(2)}</h2>
      <div className="checkout-summary__btn">
        <button
          className="checkout-summary__btn--cancel btn-large"
          onClick={props.checkoutCancelled}>CANCEL</button>
        <button
          className="checkout-summary__btn--continue btn-large"
          onClick={props.checkoutContinued}>CONTINUE</button>
      </div>

    </div>
  )
}

export default CheckoutSummary