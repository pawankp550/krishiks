import React from 'react'
import ProductCard from './ProductCard'
import './css/slider.scss'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


const responsive = {
    0:{
        items:1,
        loop: false,
        stagePadding: 40,
    },
    600:{
        dots:true,
        items:2,
        loop: false,
        stagePadding: 40,
    },
    1000:{
        items:3,
        loop:false,
        stagePadding: 20,
    },
    1050:{
        items:4,
        loop:false,
    },
    1300:{
        items:5,
        loop:false,
        stagePadding: 30,
    }
}

export default function Slider({data, title}) {
    const renderCard = ( ) => {
        return data.map((item, i) => {
            return (
                <ProductCard key={i} data={item}/>
            )
        })
    }

    return (
        <div className="slider-container">
            <div className="slider-title">{title}</div>
            <OwlCarousel
                responsive = {responsive}
                dots={true}
                className="owl-theme"
                loop
            >
                {
                    renderCard()
                }
            </OwlCarousel>
            </div>
    )
}
