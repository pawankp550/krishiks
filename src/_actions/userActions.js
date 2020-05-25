import { userConstants } from '../_constants/userConstants'
import allActions from '../_actions/index'
import history from '../_helpers/history';

import { loginUser } from '../components/user/services'

const login = (data) => {
    return async dispatch => {
        dispatch(request(data.email))
        const response = await loginUser(data)
        if (response.error) {
            if (response.error.response.status === 404) {
                dispatch(failure())
                dispatch(allActions.alertActions.failure('Email or Password is wrong'))
            } else {
                dispatch(failure())
                dispatch(allActions.alertActions.failure(response.error.message))
            }
        } else {
            dispatch(success(response.data.publicProfile))
            history.push('/')
        }
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, payload: user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE } }
}

export default {
    login
}