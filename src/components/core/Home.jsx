import React, {useEffect, useState} from 'react'
import Layout from './Layout'

import Slider from './common/Slider'

import { fetchProducts } from './services'

export default function Home() {
    const [trendingProducts, setTrendingProducts] = useState([])
    const init = async () => {
        const query = {
            limit: 5, 
            sortType: 'asc', 
            sortby: 'sold'
        }
        const response = await fetchProducts(query)
        if(response.error) {
            console.log(response)
        } else {
            setTrendingProducts(response.data)
        }
    }

    useEffect(() => {
        init()
    }, [])
    return (
        <Layout>
           { trendingProducts[0] ? <Slider data={trendingProducts} title={'TRENDING'}/>: 'Loading'}
        </Layout>
    )
}
