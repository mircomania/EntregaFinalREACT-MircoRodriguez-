import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemContext } from '../contexts/itemContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Brief } from './Brief';

const initialValues = {
    phone: '',
    email: '',
    emailConfirm: '',
    name: '',
    lastname: '',
};

export const Cart = () => {
    const { items, reset, removeItem } = useContext(ItemContext);

    const [buyer, setBuyer] = useState(initialValues);

    const total = parseFloat(items.reduce((acc, act) => acc + act.price * act.quantity, 0)).toFixed(2);

    const sendOrder = () => {
        const order = { buyer, items, total, date: new Date().toISOString(), stage: 'generada' };

        const db = getFirestore();

        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, order)
            .then(({ id }) => {
                if (id) {
                    alert('su orden: ' + id + ' ha sido completada!');
                }
            })
            .finally(() => {
                reset();
                setBuyer(initialValues);
            });
    };

    const handleChange = (ev) => {
        setBuyer((prev) => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleOrderClick = (e) => {
        e.preventDefault();

        if (buyer.email !== buyer.emailConfirm) {
            alert('Los emails no coinciden.');
        } else {
            sendOrder();
        }
    };

    return (
        <Container>
            <Brief
                items={items}
                total={total}
                removeItem={removeItem}
                reset={reset}
                buyer={buyer}
                handleChange={handleChange}
                handleOrderClick={handleOrderClick}
            />
        </Container>
    );
};
