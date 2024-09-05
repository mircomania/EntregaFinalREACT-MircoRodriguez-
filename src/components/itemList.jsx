import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const ItemList = ({ items }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center pt-4">
            {items.map((item) => (
                <Card key={item.id} style={{ width: '9.6rem' }} className="m-3">
                    <Card.Img variant="top" src={item.image} />

                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>

                        <Card.Text>{item.categoryId}</Card.Text>

                        <Card.Text>{item.description}</Card.Text>

                        <Link to={`/item/${item.id}`}>
                            <Button variant="dark">Ver producto</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
