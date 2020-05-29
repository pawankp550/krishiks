import React, {useEffect, useState} from 'react'
import CreateProductForm from './CreateProductForm'
import Layout from './Layout'

import { getCategories, getSellers } from './services'
import { useSelector } from 'react-redux'

export default function CreateProduct() {
    const loadingState = useSelector(state => state.loading)
    const [categories, setCategories] = useState({})
    const [sellers, setSellers] = useState({})

    const fetchCategories = async () => {
        const response = await getCategories()
        if(response.error) {
            console.log(response.error)
        } else {
            setCategories(response.data)
        }
    }

    const fetchSellers = async () => {
        const response = await getSellers()
        if(response.error) {
            console.log(response.error)
        } else {
            setSellers(response.data)
        }
    }

    useEffect(() => {
        fetchCategories()
        fetchSellers()
    }, [])

    return (
        <Layout>
            {sellers.length > 0 && categories.length > 0 ? <CreateProductForm loadingState = {loadingState} categories = {categories} sellers = {sellers}/> : null}
        </Layout>
        
    )
}
