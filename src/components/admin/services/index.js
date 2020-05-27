import Axios from 'axios'
import { URL } from '../../../config'

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
        const response = await Axios.get(`${URL}/category`)
        return response
    } 
    catch (err) {
        return { error: err}
    }
}