import React from 'react'
import Layout from './Layout'
import CreateCategory from './CreateCategoryForm'
import ManageCategories from './ManageCategories'

export default function Categories() {
    return (
        <Layout>
            <CreateCategory/>
            <ManageCategories/>
        </Layout>
    )
}
