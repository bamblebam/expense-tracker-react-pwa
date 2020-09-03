import { GET_ITEM, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './types.js'

export const getItems = () => {
    return {
        type: GET_ITEM
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}