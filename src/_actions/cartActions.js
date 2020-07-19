import { cartConstants } from '../_constants/cartConstants'

const addProductToCart = (product) => {
    return {
        type: cartConstants.ADD_PRODUCT,
        payload: product
    }
}

const removeProductFromCart = (product) => {
    return {
        type: cartConstants.REMOVE_PRODUCT,
        payload: product
    }
}

const incrementProductQuantity = (product) => {
    return {
        type: cartConstants.INCREMENT_QUANTITY,
        payload: product
    }
}

const decrementProductQuantity = (product) => {
    return {
        type: cartConstants.DECREMENT_QUANTITY,
        payload: product
    }
}

export default {
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity
}