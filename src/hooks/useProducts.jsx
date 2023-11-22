import { useState, useEffect } from "react";
import { getProducts, getSingleProduct, getCategoryProduct } from '../service';


export const useProducts = (limit) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect (() =>{
        getProducts(limit)
        .then((res) =>{setProducts(res.data.products);})
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    }, [] );

    return { products, loading, error };
};

export const useSingleProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect (() =>{
        getSingleProduct(id)
        .then((res) =>{setProduct(res.data);})
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    }, [] );

    return { product, loading, error };
}

export const useCategoryProducts = (categoryId) => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect (() =>{
        getCategoryProduct(categoryId)
        .then((res) =>{setProduct(res.data.products);})
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    }, [categoryId] );

    return { products, loading, error };
}