import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemListComponent = ({products}) => {
    console.log(products)
    return (
        <div style={{display: "flex", flexWrap: 1, width: "100vw"}}>
        {products.map((product) => {
            return (
                <Card key={product.id} style={{ width: '18rem', margin: 20 }}>
                    <Link to={`../item/${product.id}`}>
                        <Card.Img variant="top" src={product.thumbnail} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                </Card>
            );
            })}
        </div>
    )
}