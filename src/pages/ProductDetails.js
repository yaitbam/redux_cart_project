import React, { Component } from 'react'
import { getById }  from '../api/products'
import {addToCart} from '../store/actions/actions'
import {connect } from 'react-redux'


class ProductDetails extends Component {
    state = {
        loading: true,
        quantity: 0,
        product: {}
    }
    componentDidMount(){
        const id = this.props.match.params.id
        getById(parseInt(id))
            .then(products => {
                setTimeout(() => {
                    this.setState({
                        product: products,
                        loading: false 
                    })
                }, 2000)
            })
    }
    handleQuantity = (event) => {
        const value = event.target.value
        if(value < 0){
            return ;
        }
        this.setState({
            quantity: value
        })
    }

    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity)
    }
    render() {
        if(this.state.loading)
            return 'Loading ...';
        const {product , quantity }  = this.state
        return (
            <div>
                <h1>Product Details</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={ product.img } width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1>{ product.name }</h1>
                    <p>Price: {  product.price } $</p>
                    <p>Description: {  product.description } </p>
                    <br/><br/>
                    <input type="number" value={ quantity } onChange={  this.handleQuantity }/>
                    <br/>
                    <br/>
                    <p>Total: {  quantity * product.price  } $ </p>
                    <button className="btn btn-primary" onClick={ () => this.addToCart(product)} >Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps  = (dispatch) => {
    return {
        addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    }
}

export default connect(null, mapDispatchToProps)(ProductDetails)