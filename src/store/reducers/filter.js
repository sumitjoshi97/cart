import * as actionTypes from '../actions/actionTypes';

const sizes = [
  'XS', 'S', 'M', 'ML', 'L', 'X', 'XL', 'XXL'
]

const initialState = {
    sizes: sizes,
    filters: []
}

const toggleFilter = (state, action) => {
    const index = state.filters.indexOf(action.filter);

    if (index >= 0) {
      return {
        ...state,
        filters: state.filters.slice(0, index).concat(state.filters.slice(index+1))
      }
    } else {
      return {
        ...state,
        filters: state.filters.concat(action.filter)
      }
    }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.TOGGLE_FILTER:
    return toggleFilter(state, action)

  default:
    return state
  }
}