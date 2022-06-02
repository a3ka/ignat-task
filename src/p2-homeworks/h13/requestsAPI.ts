import axios from 'axios'


export const requestsAPI = (checkbox: boolean) => {
    return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkbox})
}