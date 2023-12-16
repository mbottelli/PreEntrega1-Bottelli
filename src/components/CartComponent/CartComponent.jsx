import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context";

export const CartComponent = () => {
    const { itemCount } = React.useContext(CartContext);
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} className='me-2' color="White"/>
        <Badge>{itemCount}</Badge>
        </>
    );
}