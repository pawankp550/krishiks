import { alertConstants } from '../_constants/alertConstants'

const alertReducer = (state = {}, action) => {
    switch (action.type) {
        case alertConstants.SUCCESS: 
            return {
                type: 'alert-success',
                message: action.payload
            }
        
        case alertConstants.ERROR:
            return {
                type: 'alert-error',
                message: action.payload
            }   

        case alertConstants.CLEAR: 
            return {}     
        
        default:
            return state
    }
}

export default alertReducer