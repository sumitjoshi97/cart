import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    totalPrice: 0,
    isCartActive: false
}

// add product to cart
const addProductToCart = (state, action) => {
    let product = action.product;
    let cart = [...state.cart]
    
    // if product is in state
    let tempProduct = state.cart.find(p => p.id === product.id)
    if (tempProduct) {
        let index = state.cart.indexOf(tempProduct)
        let quantity = tempProduct.quantity + 1

        return { ...state,
            cart: state.cart.slice(0, index)
                .concat([{
                    ...state.cart[index],
                    quantity: quantity
                }])
                .concat(state.cart.slice(index + 1)),
            totalPrice: state.totalPrice + product.price
        }
    }

    // if product is not in state , store product with quantity = 1
    else {
        product.quantity = 1;
        return { ...state,
            cart: cart.concat(product),
            totalPrice: state.totalPrice + product.price
        }
    }
}

// toggle cart state
const toggleCart = (state, action) => {
    return { ...state,
        isCartActive: !state.isCartActive
    }
}

// reducer
export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_PRODUCT_TO_CART:
            return addProductToCart(state, action)
        case actionTypes.TOGGLE_CART:
            return toggleCart(state, action)

        default:
            return state
    }
}