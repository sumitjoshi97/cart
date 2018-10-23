import * as actionTypes from '../actions/actionTypes'

// initial State for cart reducer
const initialState = {
  cart: [],
  totalPrice: 0,
  isCartActive: false,
  checkout: false
}

// initialize cart
const cartInit = (state, action) => {
  return initialState
}

// add product to cart
const addProductToCart = (state, action) => {
  let product = action.product

  // if product is in state
  let tempProduct = state.cart.find(p => p.id === product.id)
  if (tempProduct) {
    let index = state.cart.indexOf(tempProduct)
    let quantity = tempProduct.quantity + 1

    // return state with updated product quantity -> product.quantity + 1
    return {
      ...state,
      cart: state.cart
        .slice(0, index)
        .concat([
          {
            ...state.cart[index],
            quantity: quantity
          }
        ])
        .concat(state.cart.slice(index + 1)),
      totalPrice: state.totalPrice + product.price
    }
  }

  // if product is not in state , store product with quantity = 1
  else {
    product.quantity = 1
    return {
      ...state,
      cart: state.cart.concat(product),
      totalPrice: state.totalPrice + product.price
    }
  }
}

// subtract or remove product from cart
const removeProductFromCart = (state, action) => {
  let { product } = action

  let tempProduct = state.cart.find(p => p.id === product.id)

  tempProduct.quantity -= 1
  let index = state.cart.indexOf(tempProduct)

  // if quantity > 0, subtract quantity of product in cart
  if (tempProduct.quantity > 0) {
    return {
      ...state,
      cart: state.cart
        .slice(0, index)
        .concat(tempProduct)
        .concat(state.cart.slice(index + 1)),
      totalPrice: state.totalPrice - product.price
    }
  } 
  // if quantity = 0 , then remove product from cart
  else {
    return {
      ...state,
      cart: state.cart.slice(0, index).concat(state.cart.slice(index + 1)),
      totalPrice: state.totalPrice - product.price
    }
  }
}

// method to set checkout
const cartCheckout = (state, action) => {
  return {
    ...state,
    checkout: true
  }
}

// ---------------- CART reducer ------------------------
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_INIT:
      return cartInit(state, action)

    case actionTypes.ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action)

    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return removeProductFromCart(state, action)

    case actionTypes.CART_CHECKOUT:
      return cartCheckout(state, action)

    default:
      return state
  }
}
