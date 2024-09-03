import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id ? /* true */ collection(db, 'items') : /* false */ query(collection(db, 'items'), where('categoryId', '==', id));

        getDocs(refCollection)
            .then((snapshot) => {
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </Container>
        );

    return (
        <Container className="d-flex flex-wrap justify-content-center pt-4">
            {items.map((i) => (
                <Card key={i.id} style={{ width: '9.6rem' }} className="m-3">
                    <Card.Img variant="top" src={i.image} />
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>{i.categoryId}</Card.Text>
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
