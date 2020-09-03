import uuid from 'uuid'
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions/types.js'

const initialState = {
    items: [
        { id: uuid(), name: 'Milk', price: 45 },
        { id: uuid(), name: 'Milk2', price: 445 },
        { id: uuid(), name: 'Milk3', price: 475 },
        { id: uuid(), name: 'Milk4', price: 4534 }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEM:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}