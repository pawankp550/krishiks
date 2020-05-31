import React from 'react'
import Layout from './Layout'
import CreateCategory from './CreateCategoryForm'
import ManageCategories from './ManageCategories'
import { useSelector } from 'react-redux'
export default function Categories() {
    const loadingState = useSelector(state => state.loading)
    return (
        <Layout>
            <CreateCategory loadingState = {loadingState}/>
            <ManageCategories/>
        </Layout>
    )
}
