import {combineReducers} from 'redux'
import alert from './alertReducer'
import authentication from './authenticationReducer'
import loading from './loadingReducer'

const rootReducer = combineReducers({
    alert,
    authentication,
    loading
})

export default rootReducer