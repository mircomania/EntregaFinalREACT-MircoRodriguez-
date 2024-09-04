import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spiner } from './utils/spiner';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { ItemList } from './itemList';
import Container from 'react-bootstrap/Container';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id ? collection(db, 'items') : query(collection(db, 'items'), where('categoryId', '==', id));

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

    if (loading) return <Spiner />;

    return (
        <Container>
            <ItemList items={items} />
        </Container>
    );
};
