import React from 'react'
import CartItem from '../components/CartItem'
import ProductsApi from '../api/products'
import {removeFromCart} from '../store/actions/actions'
import {clearCart} from '../store/actions/actions'
import {connect } from 'react-redux'
 
class Cart extends React.Component{
    
    // state = {
    //     products: []
    // }

    // componentDidMount(){
    //     ProductsApi.getAll()
    //         .then(data => {
    //             this.setState({ products: data})
    //             console.log({ data })
    //         })
    // }
    placeOrder = () => {
        //send request to the server
        //clear cart
        this.props.clearCart()
        alert(" we receive your order and we are working on it ")
    }

    render(){
        return (
            <div>
                <h1>Cart</h1>
                <div className="row">
                    { this.props.cartItems.map((item, index) => 
                         <div className="col-4"   key={item.product.id}>
                         <CartItem  item={ item } index={index} />
                         </div>
                    )}
                </div>
                <br/>
                <h3>
                    Total: { this.props.total }
                </h3>
                <button  className="btn btn-primary btn-block" onClick={ this.placeOrder } >Place orders</button>
            </div>
        )
    }
    
}

const mapStateToProps  = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce( (total, item) => total + item.quantity * item.product.price , 0 )
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)