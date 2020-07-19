import Axios from 'axios'
import { URL } from '../../../config'

// category
export const createCategory = async (name, token) => {
    try {
        const response = await Axios.post(`${URL}/category/create`, {
            "name": name
            },
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getCategories = async () => {
    try {
        const response = await Axios.get(`${URL}/categories`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

// seller

export const createSeller = async (data, token) => {
    try {
        const response = await Axios.post(`${URL}/seller/create`, data,
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const getSellers = async () => {
    try {
        const response = await Axios.get(`${URL}/sellers`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

// product 

export const createProduct = async (data, token) => {
    try {
        const response = await Axios.post(`${URL}/product/create`, data,
            {
            headers: {
                Authorization: token
            }
        })
        return response
    } 
    catch (err) {
        return { error: err}
    }
}