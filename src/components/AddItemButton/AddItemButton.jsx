import React from "react";
import { Button } from "react-bootstrap";
import { CartContext } from '../../context'

export const AddItemButton = ({label = "Agregar al carrito", quantity, handleResetQuantity}) => {
    
    const {  itemCount, setItemCount } = React.useContext(CartContext);
    
    const handleAddCart = () => {
        setItemCount(itemCount + quantity);
        handleResetQuantity();
    };
    
    return(
        <Button onClick={handleAddCart} style={{marginTop: 30}}>{label}</Button>
    )
}