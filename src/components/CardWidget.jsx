import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CardWidget = () => {
    return (
        <>
            <a href="#home">
                <FontAwesomeIcon icon={faCartShopping} className="iconoCarro" />
            </a>
            <span>0</span>
        </>
    );
};
