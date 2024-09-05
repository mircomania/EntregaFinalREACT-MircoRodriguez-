import { useState } from 'react';

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (count < stock) setCount((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (count > 1) setCount((prev) => prev - 1);
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(1);
    };

    return (
        <>
            <div className="d-flex align-items-center">
                <button className="btn btn-dark px-4" onClick={handleIncrease}>
                    +
                </button>

                <span className="mx-3">{count}</span>

                <button className="btn btn-dark px-4" onClick={handleDecrease}>
                    -
                </button>
            </div>

            <button className="btn btn-dark mt-1 px-5" onClick={handleAdd}>
                Comprar
            </button>
        </>
    );
};
