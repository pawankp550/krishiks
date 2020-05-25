import { userConstants } from '../_constants/userConstants'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user: user.publicProfile } : {}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST: 
            return {
                loggingIn: true,
                user: action.payload
            }

        case userConstants.LOGIN_SUCCESS: 
            return {
                loggedIn: true,
                user: action.payload
            }
            
        case userConstants.LOGIN_FAILURE: 
            return {}
        
        case userConstants.LOGOUT: 
            return {}

        default: 
            return state
    }
}

export default authenticationReducer