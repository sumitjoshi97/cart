import React, { PureComponent } from 'react'
import './Product.css'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'

//product component in products list
class Product extends PureComponent {
  state = {
    quantity:
      0 ||
      (this.props.cart.find(p => p.id === this.props.product.id)
        ? this.props.cart.find(p => p.id === this.props.product.id).quantity
        : false)
  }

  // method to add product to cart
  addQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
    this.props.onAddProductToCart(this.props.product)
  }

  // mthod to 1. subtract and 2. remove product -- `if quantity = 0` -- from cart
  subtractQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }))
    this.props.onRemoveProductFromCart(this.props.product)
  }

  //buttons render for product 
  renderButtons = () => {
    const { quantity } = this.state
    // return buttons based  on product quantity
    return quantity > 0 ? (
      // if product quantity is > 0 it renders `add` and `subtract` button
      <div className="product__cta">
        <button
          onPointerDown={this.subtractQuantity}
          className="product__cta__subtract cta-btn"
        >
          -
        </button>

        <div className="product__cta__quantity">{quantity}</div>

        <button
          onPointerDown={this.addQuantity}
          className="product__cta__add cta-btn"
        >
          +
        </button>
      </div>
    ) : (
      // if quantity = 0 it renders `add To Cart` button 
      <button className="product__add" onPointerDown={this.addQuantity}>
        {' '}
        Add to Cart
      </button>
    )
  }

  render() {
    return (
      <div className="product">
        <img
          className="product__image"
          src={this.props.product.image_url}
          alt="product"
          onPointerDown={() =>
            this.props.clicked(
              this.props.product.image_url,
              this.props.product.title
            )
          }
        />
        <div className="product__info">
          <h3 className="product__info__header">{this.props.product.title}</h3>
          <p className="product__info__price">{`$${
            this.props.product.price
          }  USD`}</p>
          <p className="product__info__para">{this.props.product.style}</p>
        </div>

        {this.renderButtons()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

const mapDispatchToProps = dispatch => {
  return {
    onAddProductToCart: product => dispatch(actions.addProductToCart(product)),
    onRemoveProductFromCart: product =>
      dispatch(actions.removeProductFromCart(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
