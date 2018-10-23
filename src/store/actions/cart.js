import * as actionTypes from './actionTypes'

export const cartInit = () => ({
  type: actionTypes.CART_INIT
})

export const cartCheckout = () => ({
  type: actionTypes.CART_CHECKOUT
})

export const addProductToCart = product => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  product
})

export const removeProductFromCart = product => ({
  type: actionTypes.REMOVE_PRODUCT_FROM_CART,
  product
})
