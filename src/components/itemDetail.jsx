import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemQuantitySelector';

export const ItemDetail = ({ item, onAdd }) => {
    return (
        <Container>
            <h1>{item.title}</h1>
            <h2>{item.categoryId}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} height={300} />
            <br />
            <b>${item.price}</b>
            <p>Stock disponible: {item.stock}</p>
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </Container>
    );
};
