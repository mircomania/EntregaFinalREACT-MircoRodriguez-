import { ItemCount } from './ItemQuantitySelector';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export const ItemDetail = ({ item, onAdd }) => {
    return (
        <div>
            <Container className="mt-5">
                <Row className="mx-auto justify-content-center">
                    <Col xs={12} sm={6} className="d-flex justify-content-center">
                        <img src={item.image} alt={item.title} height={300} />
                    </Col>

                    <Col xs={12} sm={6} className="flex-column">
                        <h1>{item.title}</h1>
                        <h2>{item.categoryId}</h2>
                        <p>{item.description}</p>
                        <b>${item.price}</b>
                        <p>Stock disponible: {item.stock}</p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
