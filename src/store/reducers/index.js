import {combineReducers} from 'redux';

import filterReducer from './filter';
import cartReducer from './cart';
import orderReducer from './order';
import productReducer from './product'
import authReducer from './auth'

const reducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    filter: filterReducer,
    order: orderReducer,
    auth: authReducer
})

export default reducer