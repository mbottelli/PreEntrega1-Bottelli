import axios from "axios";

export function getProducts (limit = 10) {
    return axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export function getSingleProduct (id) {
    return axios.get(`https://dummyjson.com/products/${id}`)
}

export function getCategoryProduct (categoryId) {
    return axios.get(`https://dummyjson.com/products/category/${categoryId}`)
}