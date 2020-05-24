import { alertConstants } from '../_constants/alertConstants' 

const success = (message) => {
    return {
        type: alertConstants.SUCCESS,
        payload: message
    }
}

const failure = (message) => {
    return {
        type: alertConstants.ERROR,
        payload: message
    }
}

const clear = () => {
    return {
        type: alertConstants.CLEAR
    }
}

export default {
    success,
    failure,
    clear
}