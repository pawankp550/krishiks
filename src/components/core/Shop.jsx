import React, {useState, useEffect} from 'react'

import Layout from './Layout' 
import ProductCard from './common/ProductCard'

import { fetchProductsByFilter } from './services'
import './css/shop.scss'

export default function Shop() {
    const [products, setProducts] = useState([])

    const init = async () => {
        const response = await fetchProductsByFilter()
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(response)
            setProducts(response.data.products)
        }
    }

    useEffect(() => {
        init()
    }, [])

    const renderProductCards = () => {
        return products.map((item, i) => {
            return (
                <ProductCard data = {item} />
            )
        })
    }

    return (
        <Layout>
            <div className="shop">
                {products[0] ? renderProductCards() : null}
            </div>
        </Layout>
    )
}
