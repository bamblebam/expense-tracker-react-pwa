import axios from "axios"
import { returnErrors } from "./errorAction"
import { AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, USER_LOADING } from "./types"

export const loaduser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })
    axios.get('api/users/user', tokenConfig(getState)).then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({ type: AUTH_ERROR })
    })
}

export const tokenConfig = getState => {
    const token = getState().auth.token
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if (token) {
        config.headers['x-auth-token'] = token
    }
    return config
}

export const register = ({ username, email, password }) => dispatch => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body = JSON.stringify({ username, email, password })
    axios.post('/api/users', body, config).then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
        dispatch({ type: REGISTER_FAIL })
    })
}