import React from 'react'
import './Order.css'

const Order = props =>{ 
    const products = props.products.map(product => (
        <div className="order__product" key={product.key}>
            <img 
                src={product.image_url} 
                alt="product" 
                className="order__product__image"/>
            <h4 className="order__product__info">
                {`${product.title} x ${product.quantity}`}
            </h4>
        </div>
    ))

    return (
    <div className="order">
        <div className="order__product-list">
            {products}
        </div>
        <div className="order__price">{`PRICE: USD ${props.price.toFixed(2)}`}</div>
    </div>
  )}


export default Order