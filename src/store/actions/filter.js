import * as actionTypes from './actionTypes';

const setFilter = (filter) => {
    return {
        type: actionTypes.SET_FILTER,
        filter
    }
}