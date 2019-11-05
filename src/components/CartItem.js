import React, { Component } from 'react'
import {removeFromCart} from '../store/actions/actions'
import {connect } from 'react-redux'

function CartItem(props){
    const {item, index} = props
    const {product} = item
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={ product.img } className="card-img-top" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title">{ product.name } </h5>
                            <p className="card-text">
                                Price: { product.price } $
                                <br/>
                                Quantity: { item.quantity }
                                <br/>
                                Total: {  item.quantity * product.price }
                                </p>
                            <button onClick={() =>  props.removeFromCart(index) }  className="btn btn-danger">
                                <i className=" fa fa-trash "></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
    )
}
const mapDispatchToProps  = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    }
}

export default connect(null, mapDispatchToProps)(CartItem)