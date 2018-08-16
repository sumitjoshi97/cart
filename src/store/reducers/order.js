import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.PURCHASE_INIT:
            return { ...state, purchased: false}

        case actionTypes.PURCHASE_ORDER_START:
            return { ...state, loading: true}

        case actionTypes.PURCHASE_ORDER_SUCCESS:
            const newOrder = { ...action.orderData, id: action.orderID}
            return { ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            }

        case actionTypes.PURCHASE_ORDER_FAIL:
            return { ...state, loading: false}

        default:
            return state
    }
}