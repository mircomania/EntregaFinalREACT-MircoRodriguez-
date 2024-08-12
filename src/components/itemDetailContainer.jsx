import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/productos.json';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => setTimeout(() => resolve(data), 2000))
            .then((res) => {
                const finded = res.find((i) => i.id === Number(id));
                setItem(finded);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return 'wait';

    return (
        <Container>
            <h1>{item.name}</h1>
            <h2>{item.category}</h2>
            <p>{item.description}</p>
            <img src={item.picture} alt="" height={300} />
            <br />
            <b>${item.price}</b>
        </Container>
    );
};
