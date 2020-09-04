import { GET_ITEM, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './types.js'
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading())
    axios.get('/api/expenses').then(res => dispatch({
        type: GET_ITEM,
        payload: res.data
    }))
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = (item) => dispatch => {
    axios.post('/api/expenses/add', item).then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    }))
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}