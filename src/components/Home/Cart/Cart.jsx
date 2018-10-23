import React, { Component } from 'react'
import CartItem from './Cartitem/CartItem'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import files
import './Cart.css'
import classNames from 'classnames'
import * as actions from '../../../store/actions/index'

export class Cart extends Component {
  state = {
    isCartActive: false
  }
  componentDidMount() {
    // if order is purchased and checkout is done, empty the cart
    if (this.props.purchased) {
      this.props.onCartInit()
    }
  }

  // toggle Cart from hidden to visible and vice-versa
  toggleCart = () => {
    this.setState(prevState => ({
      isCartActive: !prevState.isCartActive
    }))
  }

  // method for checkout button
  handleCheckout = () => {
    this.props.onPurchaseInit()
    // if user is not authenticated and clicks to checkout -> will be redirected to auth page to login
    if (!this.props.auth && this.props.cart.length > 0) {
      this.props.onCartCheckout()
      this.props.onSetAuthRedirectPath('/checkout')
      this.props.history.push('/auth')
    }
    // if user id authenticated and clicks checkout button -> will be redirected to checkout page
    else if (this.props.auth && this.props.cart.length > 0) {
      this.props.onCartCheckout()
      this.props.history.push('/checkout')
    } else {
      //
    }
  }

  render() {
    const { isCartActive } = this.state

    let cartList = []
    if (this.props.cart) {
      // set the cartlist to list of products from cart - redux store
      cartList = this.props.cart.map(product => {
        return (
          <CartItem
            key={product.id}
            title={product.title}
            image={product.image_url}
            quantity={product.quantity}
            price={product.price * product.quantity}
          />
        )
      })
    }

    return (
      <div className={classNames('cart', { 'cart-open': isCartActive })}>

        {/* button to toggle cart visibility */}
        <button
          onPointerDown={this.toggleCart}
          className={classNames('cart__toggle-btn', {
            'cart-open__toggle-btn': isCartActive
          })}
        >
          cart
        </button>

        {/* list of product in cart */}
        <ul className="cart__list">{cartList}</ul>
        <div className="cart__checkout">

          {/* checkout button */}
          <button
            className="cart__checkout--btn btn-large"
            onPointerDown={this.handleCheckout}
          >
            Checkout
          </button>
          
          {/*  */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    checkout: state.cart.checkout,
    purchased: state.order.purchased,
    isAuth: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPurchaseInit: () => dispatch(actions.purchaseInit()),
    onCartInit: () => dispatch(actions.cartInit()),
    onCartCheckout: () => dispatch(actions.cartCheckout()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Cart))
