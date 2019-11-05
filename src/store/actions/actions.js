import { REMOVE_FROM_CART } from './types'
import { ADD_TO_CART } from './types'
import { CLEAR_CART } from './types'



export  function addToCart(productInfo, quantity){
    return {
        type: ADD_TO_CART,
        productInfo,
        quantity
    }
}

export function removeFromCart(index){
    return {
        type: REMOVE_FROM_CART,
        index
    }
}

export function clearCart(index){
    return {
        type: CLEAR_CART
    }
}