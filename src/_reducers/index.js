import {combineReducers} from 'redux'
import alert from './alertReducer'
import authentication from './authenticationReducer'
import loading from './loadingReducer'
import cart from './cartReducer'

const rootReducer = combineReducers({
    alert,
    authentication,
    loading,
    cart
})

export default rootReducer