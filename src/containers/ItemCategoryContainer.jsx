import React from "react";
import { useCategoryProducts } from "../hooks";
import { LoaderComponent, ItemListComponent } from "../components";
import { useParams } from "react-router-dom";


export const ItemCategoryContainer = ({}) => {
    const { categoryId } = useParams();
    const { products, loading } = useCategoryProducts(categoryId);
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