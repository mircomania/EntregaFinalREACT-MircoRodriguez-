import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import data from '../data/productos.json';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => setTimeout(() => resolve(data), 2000))
            .then((res) => {
                if (!id) {
                    setItems(res);
                } else {
                    const filtered = res.filter((i) => i.category === id);
                    setItems(filtered);
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ height: '100vh' }}
            >
                <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </Container>
        );

    return (
        <Container className="d-flex flex-wrap justify-content-center pt-4">
            {items.map((i) => (
                <Card key={i.id} style={{ width: '9.6rem' }} className="m-3">
                    <Card.Img variant="top" src={i.picture} />
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>{i.category}</Card.Text>
                        <Card.Text>{i.description}</Card.Text>
                        <Link to={`/item/${i.id}`}>
                            <Button variant="dark">Ver producto</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};
