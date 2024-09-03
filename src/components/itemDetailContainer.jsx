import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemContext } from '../contexts/itemContext';
import { ItemCount } from './itemCount';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const { addItem } = useContext(ItemContext);

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, 'items', id);

        getDoc(refDoc)
            .then((snapshot) => {
                setItem({ ...snapshot.data(), id: snapshot.id });
            })
            .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (count) => addItem({ ...item, quantity: count });

    if (loading)
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </Container>
        );

    return (
        <Container>
            <h1>{item.title}</h1>
            <h2>{item.categoryId}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt="" height={300} />
            <br />
            <b>${item.price}</b>
            <p>{item.stock}</p>
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </Container>
    );
};
