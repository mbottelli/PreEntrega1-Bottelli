import { Card } from "react-bootstrap";
import { ItemQuantitySelector } from "../ItemQuantitySelector";

export const ItemSingleComponent = ({products}) => {
    return(
        <div style={{display: "flex", flexWrap: 1, width: "100vw"}}>
            <Card key={products.id} style={{ width: '18rem', margin: 20 }}>
                <Card.Img variant="top" src={products.thumbnail} />
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>{products.description}</Card.Text>
                </Card.Body>
                <ItemQuantitySelector />
            </Card>
        </div>
    )
}