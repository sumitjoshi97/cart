import React from 'react'
import './CartItem.css'
const CartItem = props => {

  return (
    <div className="cart-item">
      <img src={props.image} alt="product" className="cart-item__image"/>
      
      <div className="cart-item__info">
          <div className="cart-item__info__title">{props.title}</div>
          <div className="cart-item__info__quantity"><span className="header">quantity : </span>{props.quantity}</div>
          <div className="cart-item__info__price"><span className="header">price : </span>{`$${(props.price).toFixed(2)} USD`}</div>
      </div>
    </div>
  )
}

export default CartItem
