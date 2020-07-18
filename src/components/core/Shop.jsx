import React, {useState, useEffect} from 'react'

import Layout from './Layout' 
import ProductCard from './common/ProductCard'
import PlpCheckbox from './common/PlpCheckbox'

import { fetchProductsByFilter, fetchProductCategories } from './services'
import './css/shop.scss'

export default function Shop() {
    const [loading, setLoading] = useState(false)
    const [productFilters, setProductFilters] = useState({
        filters: {
            category: [],
            price: []
        }
    })
    
    const [products, setProducts] = useState([])
    
    const getProducts = async (filters) => {
        setLoading(true)
        const response = await fetchProductsByFilter(filters)
        if (response.error) {
            setLoading(false)
            console.log(response.error)
        } else {
            setLoading(false)
            setProducts(response.data.products)
        }
    }
    
    useEffect(() => {
        getProducts(productFilters.filters)
    }, [productFilters])
    
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        setLoading(true)
        const response = await fetchProductCategories()
        if (response.error) {
            console.log(response.error)
            setLoading(false)
        } else {
            setCategories(response.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleFilters = (filter, filterBY) => {
        const tempFilter = {...productFilters}
        tempFilter.filters[filterBY] = filter
        setProductFilters(tempFilter)
    }


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
                    {products[0] ? <PlpCheckbox loading={loading} data={categories} title={'Category'} handleFilters={(filters) => {handleFilters(filters, 'category')}}/> : null}
                </div>
                <div className="shop-right">
                    {products[0] ? renderProductCards() : null}
                </div>
            </div>
        </Layout>
    )
}
