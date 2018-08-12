import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


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
        axios
            .get('/products.json')
            .then(res => {
                let products = res.data
                // if(filters.length > 0 && filters) {
                //     products = products.filter(product => filters.find(filter => product.availableSizes.find( size => size===filter)))
                // } 
                dispatch(setProducts(products))
            })
            .catch(err => {
                dispatch(setProductsFail(err))
            })
    }
}

export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_CART,
        product
    }
}

// export const setFilter = (filter, products) => {
//     let products = null;
//     return dispatch => {
//         axios
//             .get('/products.json')
//             .then(res => {
//                 for(let item in res.data)
//                 products = res.data.filter()
//             })
//     }
// }