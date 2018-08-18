import * as actionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: null,
    authRedirectPath: '/'
}

// starting the auth function
const authStart = (state, action) => {
    return {
        ...state,
        error: null,
        loading: true
    }
}

// funtion to return state when user succesfully logs 
const authSucces = (state, action) => {
    return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    }
}

// funtion to return state when error in auth occurs - wrong email, password pair -or- other validation
const authFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}

// return state when user logout
const logout = (state, action) => {
    return {
        ...state,
        token: null,
        userId: null
    }
}

// return state for redirecting path
const setAuthRedirectPath = (state, action) => {
    return {
        ...state,
        authRedirectPath: action.path
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSucces(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.LOG_OUT: return logout(state, action)
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
        
        default: return state
    }
}