import * as actionTypes from './actionTypes';

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