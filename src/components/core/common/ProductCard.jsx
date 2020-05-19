import React from 'react'

import './css/productCard.scss'
import bananaImage from '../../../images/bananas.png'

export default function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-card-image"><img src={bananaImage} alt="bananas" /></div>
            <div className="product-card-details">   
                <div className="product-card-details-name">Bananas</div>
                <div className="product-card-details-desc">my farmer bananas</div>
                <div className="product-card-details-price" >
                    <div className="left">
                        <div className="price">Rs 40</div>   
                        <div className="weight">Per Gram</div>
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
