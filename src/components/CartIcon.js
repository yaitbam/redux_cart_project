import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './CartIcon.css'

function CartIcon (props) {
        return (
            <div id="cart-icon">
                <Link to="/cart">
                    <i className="fa fa-shopping-cart" ></i>
                    <span className="badge badge-danger" >{ props.totalQuantity }</span>
                </Link>
              
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        totalQuantity : state.cart.reduce((total, item) => total + parseInt(item.quantity), 0)
    }
}
export default connect(mapStateToProps)(CartIcon)