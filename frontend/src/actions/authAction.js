import axios from "axios"
import { returnErrors } from "./errorAction"
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from "./types"

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