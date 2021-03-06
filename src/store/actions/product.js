import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const setProductsStart = () => {
    return {
        type: actionTypes.SET_PRODUCTS_START
    }
}

export const setProducts = (data) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: data
    }
}

export const setProductsFail = () => {
    return {
        type: actionTypes.SET_PRODUCTS_FAIL
    }
}

export const initProducts = () => {
    return dispatch => {
        dispatch(setProductsStart())
        axios
            .get('/products.json')
            .then(res => {
                let products = res.data
                dispatch(setProducts(products))
            })
            .catch(err => {
                dispatch(setProductsFail())
            })
    }
}