import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.SET_PRODUCTS_START:
    return { ...state, loading: true, error: null }

  case actionTypes.SET_PRODUCTS:
    return { ...state, products: action.products, loading: false }

  case actionTypes.SET_PRODUCTS_FAIL:
    return { ...state, error: "Can't load products", loading: false }

  default:
    return state
  }
}