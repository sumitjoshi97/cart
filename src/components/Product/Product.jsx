import React, {Component} from 'react'
import './Product.css';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';

class Product extends Component {
  render() {
    return (
      <div className="product">
      <img className="product__image" src={this.props.product.image_url} alt="product" />
    <div className="product__info">
      <h3 className="product__info__header">{this.props.product.title}</h3>
      <p className="product__info__price">{`$${this.props.product.price}  USD`}</p>
      <p className="product__info__para">{this.props.product.style}</p>
    </div>

    <button 
      className="product__add" 
      onPointerDown={()=>this.props.onAddProductToCart(this.props.product)}>Add to Cart</button>
  </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    onAddProductToCart: (product) => dispatch(actions.addProductToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(Product);
