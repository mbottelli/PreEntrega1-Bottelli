import React from "react";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks";
import { ItemSingleComponent, LoaderComponent } from "../components";


export const ItemDetailContainer = ({ }) => {
    const { id } = useParams();
    const { product, loading } = useSingleProduct(id);

    return (
        <div>
            {loading ? (
                <LoaderComponent />
            ) : (
                <ItemSingleComponent products={product}/>
            )}
        </div>
    );
}