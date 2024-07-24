import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => {
    return (
        <Container>
            <p className="bienvenido">{props.greeting}</p>
        </Container>
    );
};
