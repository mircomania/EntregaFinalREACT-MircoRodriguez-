import { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const Provider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const savedItems = localStorage.getItem('cartItems');
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(items));
        }
    }, [items]);

    const addItem = (item) => {
        const alreadyExists = items.some((i) => i.id === item.id);

        if (alreadyExists) {
            const newItems = items.map((i) => {
                if (i.id === item.id) {
                    return { ...i, quantity: i.quantity + item.quantity };
                } else {
                    return i;
                }
            });
            setItems(newItems);
        } else {
            setItems((prev) => [...prev, item]);
        }
    };

    const reset = () => {
        setItems([]);
        localStorage.removeItem('cartItems');
    };

    const removeItem = (id) => {
        const filter = items.filter((i) => i.id !== id);
        setItems(filter);
    };

    return <ItemContext.Provider value={{ addItem, items, reset, removeItem }}>{children}</ItemContext.Provider>;
};
