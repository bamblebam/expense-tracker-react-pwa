import { GET_ITEM, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './types.js'

export const getItems = () => {
    return {
        type: GET_ITEM
    }
}