import React, { Component } from 'react'
import CartItem from './Cartitem/CartItem';
import { connect } from 'react-redux'
import './Cart.css';
import classNames from 'classnames';
import * as actions from '../../../store/actions/index';
import {withRouter} from 'react-router-dom'

export class Cart extends Component {
    
    componentDidMount() {
        if (this.props.purchased) {
            this.props.onCartInit()
        }
    }

    handleClick = () => {
        this.props.onPurchaseInit()
        if (!this.props.auth && this.props.cart.length>0) {
            this.props.onCartCheckout()
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth');
        }
        else if(this.props.auth && this.props.cart.length>0) {
            this.props.onCartCheckout()
            this.props.history.push('/checkout');
        }
        else {
            //
        }
    }

    render() {
        const { isCartActive } = this.props;

        let cartList = [];
        if (this.props.cart) {
            cartList = this.props.cart.map(product => {
                return <CartItem
                    key={product.id}
                    title={product.title}
                    image={product.image_url}
                    quantity={product.quantity}
                    price={product.price * product.quantity}
                />
            })
        }

        return (
            <div className={classNames("cart", {"cart-open": isCartActive})}>
                
                <button 
                    onPointerDown={this.props.onToggleCart} 
                    className={classNames("cart__toggle-btn", {"cart-open__toggle-btn": isCartActive})}>cart
                </button>
                <ul className="cart__list">
                    {cartList}
                </ul>
                <div className="cart__checkout">
                    <button 
                        className="cart__checkout--btn btn-large" 
                        onPointerDown={this.handleClick}>Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        isCartActive: state.cart.isCartActive,
        totalPrice: state.cart.totalPrice,
        checkout: state.cart.checkout,
        purchased: state.order.purchased,
        isAuth: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCart: () => dispatch(actions.toggleCart()),
        onPurchaseInit: () => dispatch(actions.purchaseInit()),
        onCartInit: () => dispatch(actions.cartInit()),
        onCartCheckout: () => dispatch(actions.cartCheckout()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))