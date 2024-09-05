import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../contexts/itemContext';

export const CartWidget = () => {
    const { items } = useContext(ItemContext);

    const quantity = items.reduce((acc, items) => acc + items.quantity, 0);

    return (
        <Link to="/cart" className="link-no-underline">
            <a href="#home">
                <FontAwesomeIcon icon={faCartShopping} className="iconoCarro" />
            </a>

            <span className="cart-quantity">{quantity}</span>
        </Link>
    );
};
