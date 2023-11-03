import { Alert } from "react-bootstrap";

const ItemListComponent = ({greeting}) => {
    return (
        <Alert variant='success' className="w-50 mx-auto mt-5">
            <h4 className="text-center">{greeting}</h4>
        </Alert>
    );
}

export default ItemListComponent;