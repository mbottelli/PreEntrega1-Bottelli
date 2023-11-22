import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


export const CartComponent = () => {
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} className='me-2' color="White"/>
        <Badge>10</Badge>
        </>
    );
}