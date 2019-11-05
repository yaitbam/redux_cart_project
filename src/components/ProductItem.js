import React, { Component } from 'react'

function ProductItem(props){
    const {product} = props
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={ product.img } className="card-img-top" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title">{ product.name } </h5>
                            <p className="card-text">{ product.price } $</p>
                            <a href={ "/product/"+product.id } className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
    )
}
export default ProductItem