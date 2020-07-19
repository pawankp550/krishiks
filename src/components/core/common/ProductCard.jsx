import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cartActions from '../../../_actions/cartActions'
import './css/productCard.scss'

export default function ProductCard({data}) {
    const { photo, name, size, seller, price, sale_price, _id } = data
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const currentProduct = cart.filter(item => item._id === _id)
 
    return (
        <div className="product-card">
            <div className="product-card-image"><img src={photo} alt={name} /></div>
            <div className="product-card-details">   
                <div className="product-card-details-name">{name}</div>
                <div className="product-card-details-desc">{seller.name}</div>
                <div className="product-card-details-price" >
                    <div className="left">
                        {
                            sale_price && price - sale_price > 0 ? <div className="price">Rs {sale_price} <strike>{price}</strike> </div> : <div className="price">Rs {price}</div>
                        }   
                    </div>
                    <div className="right">
                        <span className="product-card-details-view">VIEW</span>
                    </div>
                </div>
                <div className="product-card-details-weight">{size}</div>
            </div>
            {
                currentProduct.length ? 
                    (
                        <div className="product-card-cartquantity" >
                            <span className="product-card-cartquantity-dec" onClick = {() => {dispatch(cartActions.decrementProductQuantity(data))}}>-</span> {currentProduct.length ? currentProduct[0].count : null} <span className="product-card-cartquantity-inc" onClick = {() => {dispatch(cartActions.incrementProductQuantity(data))}}>+</span><span className="product-card-cartquantity-del" onClick = {() => {dispatch(cartActions.removeProductFromCart(data))}}>d</span>
                        </div>
                    ) 
                    : 
                    (
                        <div className="product-card-add" onClick = {() => {dispatch(cartActions.addProductToCart(data))}}>
                            <span>ADD TO BAG</span>
                    
                    </div>
                    )
                
            }
        </div>
    )
}
