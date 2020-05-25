import { URL } from '../../../config';
import Axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await Axios.post(`${URL}/signup`, userData)
        return response
    } catch (err) {
        return { 
            error: err
        }
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await Axios.post(`${URL}/signin`, userData)
        localStorage.setItem('user', JSON.stringify(response.data));
        return response
    } catch (err) {
        return { 
            error: err
        }
    }
}
