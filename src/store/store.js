import { createStore } from 'redux'
import cartReducer from './reducers'

const initialState = {
    cart: [
        {
            product: {
                "id": 1,
                "name": "White Laptop",
                "img": "/images/1.jpg",
                "price": "400",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            },
            quantity: 5
        }
    ]
}


const store = createStore(cartReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store