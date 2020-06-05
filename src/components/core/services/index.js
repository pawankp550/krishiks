import { URL } from '../../../config'
import Axios from 'axios'

export const fetchProducts = async ({limit, sortType, sortby }) => {
    try {
        const response = await Axios.get(`${URL}/products?limit=${limit}&sortType=${sortType}&sortby=${sortby}`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const fetchProductsByFilter = async (filters) => {
    try {
        const response = await Axios.post(`${URL}/products/by/filter`, {filters})
        return response
    } 
    catch (err) {
        return { error: err}
    }
}

export const fetchProductCategories = async () => {
    try {
        const response = await Axios.get(`${URL}/categories`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}