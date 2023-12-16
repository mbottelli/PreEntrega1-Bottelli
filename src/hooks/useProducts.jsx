import { useState, useEffect } from "react";
import { getDocs, getFirestore, collection, doc, getDoc, query, where } from "firebase/firestore"

export const useProducts = (limit) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect (() =>{
        const db = getFirestore();
        const collectionRef = collection(db, "products");
        getDocs(collectionRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            })
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
        const db = getFirestore();
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((res) => {
                const data = {
                    id: res.id,
                    ...res.data(),
                };
                setProduct(data)
            })
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
        const db = getFirestore();
        const collectionRef = collection(db, "products");
        const categoryQuery = query(collectionRef, where("category", "==", categoryId))
        getDocs(categoryQuery)
        .then((res) => {
            const data = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProduct(data);
        })
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    }, [categoryId] );

    return { products, loading, error };
}