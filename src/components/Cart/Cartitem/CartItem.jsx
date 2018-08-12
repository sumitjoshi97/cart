import React from 'react'
import './CartItem.css'
const CartItem = props => {
  return (
    <div className="cart-item">
      <img src={props.image} alt="product"/>
      <div className="cart-item__info">
          <div className="cart-item__info__quantity">{props.quantity}</div>
          <div className="cart-item__info__price">{Math.round(props.price)}</div>
      </div>
    </div>
  )
}

export default CartItem
