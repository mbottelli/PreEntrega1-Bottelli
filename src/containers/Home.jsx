import React from "react";
import { useProducts } from "../hooks";
import { LoaderComponent, ItemListComponent } from "../components";


export const Home = () => {
    const { products, loading } = useProducts(5);
    return (
        <div>
            {loading ? (
                <LoaderComponent />
            ) : (
                <ItemListComponent products={products}/>
            )}
        </div>
    );
}