import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const purchaseOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        orderID: id,
        orderData: orderData
    }
}

export const purchaseOrderFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_ORDER_FAIL,
        error
    }
}

export const purchaseOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_ORDER_START
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const purchaseOrder = (orderData, token) => {
    return dispatch => {
        axios.post('/orders.json?auth=' + token, orderData)
            .then(res => {
                dispatch(purchaseOrderSuccess(res.data.name, orderData))
            })
            .catch(err => dispatch(purchaseOrderFailed(err)))
    }
}

export const fetchOrdersSuccess = orders => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
    }
}

export const fetchOrdersFail = error => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(fetchedOrders))
            })
            .catch(err => dispatch(fetchOrdersFail(err)))
    }
}