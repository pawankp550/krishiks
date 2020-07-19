import { cartConstants } from '../_constants/cartConstants'
import { 
    initialState, 
    addProduct, 
    decrementProductQuantity, 
    incrementProductQuantity,
    removeProduct,
    saveToLocal  
} from './helpers/cartHelper'

let cart = []

const cartReducer = (state = initialState(), action) => {
    switch (action.type) {
        case cartConstants.ADD_PRODUCT:
            cart = addProduct(state, action.payload)
            saveToLocal(cart)
            return cart

        case cartConstants.REMOVE_PRODUCT:
            cart = removeProduct(state, action.payload)
            saveToLocal(cart)
            return cart    
        
        case cartConstants.INCREMENT_QUANTITY:
            cart = incrementProductQuantity(state, action.payload)
            saveToLocal(cart)
            return cart

        case cartConstants.DECREMENT_QUANTITY:
            cart = decrementProductQuantity(state, action.payload)
            saveToLocal(cart)
            return cart    
        
        case cartConstants.CLEAR_CART:
            cart = []
            saveToLocal(cart)
            return cart
        
        default:
            return state  
    }
}

export default cartReducer