import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemContext } from '../contexts/itemContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValues = {
    phone: '',
    email: '',
    name: '',
};

export const Cart = () => {
    const { items, reset, removeItem } = useContext(ItemContext);

    const [buyer, setBuyer] = useState(initialValues);

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const sendOrder = () => {
        const order = { buyer, items, total };

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

    /* if (items.length === 0) return <Container>ir a la home</Container>; */

    return (
        <Container>
            <>
                <h1>Carrito de compras</h1>
                <button onClick={reset}>Vaciar</button>
                {items.map((i) => {
                    return (
                        <div key={i.id}>
                            <h2>{i.title}</h2>
                            <img src={i.image} alt="" height={150} />
                            <p>{i.quantity}</p>
                            <p onClick={() => removeItem(i.id)}>X</p>
                        </div>
                    );
                })}
                <div>Total {total}</div> <br />
                <form action="">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input value={buyer.name} name="name" onChange={handleChange} type="text" placeholder="Nombre" required />
                    </div>
                    <div>
                        <label htmlFor="">Telefono</label>
                        <input value={buyer.phone} name="phone" onChange={handleChange} type="text" placeholder="telefono" required />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input value={buyer.email} name="email" onChange={handleChange} type="text" placeholder="email" required />
                    </div>
                    <button type="button" onClick={sendOrder}>
                        Realizar Compra
                    </button>
                </form>
            </>
        </Container>
    );
};
