import { server } from "../config/config.axios"

export const getProduct=()=>{
    return server.get('user/products')
}