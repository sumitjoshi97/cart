import React from 'react'
import './CheckoutSummary.css';

const CheckoutSummary = props => (
    <div className="checkout-summary">
      <img src={props.image} alt="order" className="checkout-summary__image"/>
      <div className="checkout-summary__info">
        <div className="checkout-summary__info__title">{props.title}</div>
        <div className="checkout-summary__info__quantity">x {props.quantity}</div>
      </div>
    </div>
  )

export default CheckoutSummary
