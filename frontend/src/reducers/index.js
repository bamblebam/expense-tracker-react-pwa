import { combineReducer } from 'redux'
import itemReducer from './itemReducer'

export default combineReducer({
    item: itemReducer
})