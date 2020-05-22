import { URL } from '../../../config';
import Axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await Axios.post(`${URL}/api/signup`, userData)
        return response
    } catch (err) {
        return { 
            error: err
        }
    }
}
