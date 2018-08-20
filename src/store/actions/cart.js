import * as actionTypes from './actionTypes';

export const cartInit = () => {
    return {
        type: actionTypes.CART_INIT
    }
}

export const cartCheckout = () => {
    return {
        type: actionTypes.CART_CHECKOUT
    }
}

export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        product
    }
}

export const toggleCart = () => {
    return {
        type: actionTypes.TOGGLE_CART
    }
}