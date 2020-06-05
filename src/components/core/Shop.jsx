import React, {useState, useEffect} from 'react'

import Layout from './Layout' 
import ProductCard from './common/ProductCard'

import { fetchProductsByFilter, fetchProductCategories } from './services'
import './css/shop.scss'

export default function Shop() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const getProducts = async () => {
        const response = await fetchProductsByFilter()
        if (response.error) {
            console.log(response.error)
        } else {
            setProducts(response.data.products)
        }
    }
    
    const getCategories = async () => {
        const response = await fetchProductCategories()
        if (response.error) {
            console.log(response.error)
        } else {
            console.log(response.data)
            setCategories(response.data)
        }
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const renderProductCards = () => {
        return products.map((item, i) => {
            return (
                <ProductCard key={i} data = {item} />
            )
        })
    }

    return (
        <Layout>
            <div className="shop">
                <div className="shop-left">
                    
                </div>
                <div className="shop-right">
                    {products[0] ? renderProductCards() : null}
                </div>
            </div>
        </Layout>
    )
}
