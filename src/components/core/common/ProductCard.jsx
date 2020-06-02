import React from 'react'

import './css/productCard.scss'

export default function ProductCard({data}) {
    const { photo, name, size, seller, price, sale_price } = data
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
                        <div className="weight">{size}</div>
                    </div>
                    <div className="right">
                        <span className="product-card-details-view">VIEW</span>
                    </div>
                </div>
            </div>
            <div className="product-card-add">
                <span>ADD TO BAG</span>
            </div>
        </div>
    )
}
