import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Spiner } from './utils/spiner';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemContext } from '../contexts/itemContext';
import { ItemDetail } from './itemDetail';
import { ErrorPage } from './utils/paginaError';
import Container from 'react-bootstrap/Container';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const { addItem } = useContext(ItemContext);

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'items', id);

        getDoc(refDoc)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({ ...snapshot.data(), id: snapshot.id });
                } else {
                    setItem(null);
                }
            })
            .catch(() => {
                setItem(null);
            })
            .finally(() => setLoading(false));
    }, [id]);

    const onAdd = (count) => addItem({ ...item, quantity: count });

    if (loading) return <Spiner />;
    if (!item) return <ErrorPage />;

    return (
        <Container>
            <ItemDetail item={item} onAdd={onAdd} />
        </Container>
    );
};
