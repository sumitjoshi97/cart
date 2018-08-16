import * as actionTypes from './actionTypes';

export const toggleFilter = (filter) => {
    return {
        type: actionTypes.TOGGLE_FILTER,
        filter
    }
}