import React from 'react'
import './Product.css';
import {connect} from 'react-redux'
import * as actions from '../../../../store/actions/index';

const Product = props => {
  return (
    <div className="product">
      <img className="product__image" src={props.product.image_url} alt="product"/>
      <div className="product__info">
        <h3 className="product__info__header">{props.product.title}</h3>
        <p className="product__info__price">{`$${props.product.price}  USD`}</p>
        <p className="product__info__para">{props.product.style}</p>
      </div>

      <button
        className="product__add"
        onPointerDown={() => props.onAddProductToCart(props.product)}>Add to Cart</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddProductToCart: (product) => dispatch(actions.addProductToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(Product);