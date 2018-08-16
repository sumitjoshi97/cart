import React, { Component } from 'react'
import CartItem from './Cartitem/CartItem';
import { connect } from 'react-redux'
import './Cart.css';
import classNames from 'classnames';
import * as actions from '../../../store/actions/index';
import {withRouter} from 'react-router-dom'

export class Cart extends Component {
    handleClick = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const {isCartActive} = this.props;

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
                    <button className="cart__checkout--btn btn-large" onPointerDown={this.handleClick}>Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        isCartActive: state.cart.isCartActive,
        totalPrice: state.cart.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleCart: () => dispatch(actions.toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))