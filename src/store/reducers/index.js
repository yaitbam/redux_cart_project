import { ADD_TO_CART } from '../actions/types'
import { REMOVE_FROM_CART } from '../actions/types'
import { CLEAR_CART } from '../actions/types'


export default function cartReducer(state, action){
    console.log( state)
    switch(action.type){
        case ADD_TO_CART: {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }
        }

        case REMOVE_FROM_CART: {
            const item_index =  action.index
            const new_state  = {...state}
            delete new_state.cart[item_index]
            return new_state
        }

        case CLEAR_CART: {
            const new_state  = {...state}
            new_state.cart = []
            return new_state
        }
        default: 
            return state
    }
}