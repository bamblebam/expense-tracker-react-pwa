import { GET_ITEM, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './types.js'
import { tokenConfig } from './authAction'
import { returnErrors } from './errorAction'
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    axios.get('/api/expenses').then(res => dispatch({
        type: GET_ITEM,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}

export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/expenses/delete/${id}`, tokenConfig(getState)).then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}

export const addItem = (item) => (dispatch, getState) => {
    axios.post('/api/expenses/add', item, tokenConfig(getState)).then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}

export const updateItem = (id, item) => (dispatch, getState) => {
    axios.patch(`/api/expenses/update/${id}`, item, tokenConfig(getState)).then(res => dispatch({
        type: UPDATE_ITEM,
        payload: res.data
    })).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
    })
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}