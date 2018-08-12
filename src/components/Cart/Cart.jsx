import React, { Component } from 'react'
import CartItem from './Cartitem/CartItem';
import { connect } from 'react-redux'
import './Cart.css';

export class Cart extends Component {
    state = {
        isCartActive: false
    }
    onCartToggle = () => {
        const { isCartActive } = this.state
        this.setState(() => ({ isCartActive: !isCartActive }))
    }

    render() {
        let cartList = [];
        if (this.props.cart) {
            cartList = this.props.cart.map(product => {
                console.log(Math.round(product.price * product.quantity, 2))
                return <CartItem
                    key={product.id}
                    image={product.image_url}
                    quantity={product.quantity}
                    price={product.price * product.quantity}
                />
            })
        }

        return (
            <div className="cart">
                <button 
                    onPointerDown={this.onCartToggle} 
                    className="cart__toggle-btn">cart
                </button>
                {/* <h1 className="cart__heading">Cart</h1> */}
                <ul className="cart-list">
                    {cartList}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart)