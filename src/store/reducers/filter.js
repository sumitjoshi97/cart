import * as actionTypes from '../actions/actionTypes';

const initialState = {
    filters: []
}

const sizes = [
    'XS', 'S', 'M', 'ML', 'L', 'X', 'XL', 'XXL'
  ]


const setFilter = (state, action) => {
    let filters = {...state};
    const index = filters.indexOf(action.filter);

    if (index >= 0) {
      filters = filters.filter(filter => filter !== action.filter)
    } else {
      filters = filters.concat(size)
    }

    return {filters: filters}
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.SET_FILTER:
    return setFilter(state, action)

  default:
    return state
  }
}