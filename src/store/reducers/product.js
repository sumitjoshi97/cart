import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.SET_PRODUCTS:
    return { ...state, products: action.products }

  default:
    return state
  }
}