import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: []
}

const addProductToCart = (state, action) => {
    let cart = state.cart;
    let product = action.product;

    if(cart.includes(product)) {
        let newProduct = cart.find(p => p.id === product.id)
        newProduct.quantity += 1;
    }
    else {
        product.quantity = 1;
        cart = cart.concat(product)
    }
    return {cart: cart}
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.ADD_PRODUCT_TO_CART:   
    return addProductToCart(state, action)

  default:
    return state
  }
}