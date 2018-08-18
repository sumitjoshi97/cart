import * as actionTypes from './actionTypes'
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email, password, returnSecureToken: true
        }

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAWYbTT-aMD-w1KhvnLAYKtAGaVaNunSUo'
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAWYbTT-aMD-w1KhvnLAYKtAGaVaNunSUo'
        }

        axios.post(url, authData) 
            .then(res => dispatch(authSuccess(res.data.idToken, res.data.localId)))
            .catch(err => dispatch(authFail(err.response.data.error)))
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOG_OUT
    }
}

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}