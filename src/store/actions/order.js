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

export const purchaseOrderStart = () =>{
    return {
        type: actionTypes.PURCHASE_ORDER_START
    }
}
 
export const purchaseOrder = (orderData, token) => {
    return dispatch => {
        axios.post('/orders.json?auth='+token, orderData)
            .then(res => {
                dispatch(purchaseOrderSuccess(res.data.name, orderData))
            })
            .catch(err => dispatch(purchaseOrderFailed(err)))
    }
}

export const purchaseInit = () => {
    return {
        type: action.PURCHASE_INIT
    }
}