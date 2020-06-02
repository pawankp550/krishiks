import { URL } from '../../../config'
import Axios from 'axios'

export const fetchProducts = async ({limit, sortType, sortby }) => {
    try {
        const response = await Axios.post(`${URL}/products/by/filter?limit=${limit}&sortType=${sortType}&sortby=${sortby}`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}