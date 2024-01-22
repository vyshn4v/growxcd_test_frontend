import Axios from 'axios'
export const server=Axios.create({
    baseURL:'http://localhost:3000',
})