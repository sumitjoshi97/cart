import {combineReducers} from 'redux';

import filterReducer from './filter';
import cartReducer from './cart';
import orderReducer from './order';
import productReducer from './product'

const reducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    filter: filterReducer,
    order: orderReducer
})

export default reducer