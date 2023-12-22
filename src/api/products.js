import axios from './axios.js'

export const getProducts = (extra) => axios.get(extra ? `/products/category/${extra}` : '/products')
export const getProduct = (id) => axios.get(`/products/${id}`)
