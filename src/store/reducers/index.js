import {combineReducers} from 'redux';

import cartReducer from './cart';
// import filterReducer from './filter';
import productReducer from './product'

const reducer = combineReducers({
    cart: cartReducer,
    product: productReducer
})

export default reducer