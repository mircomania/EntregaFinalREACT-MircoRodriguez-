import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CardWidget } from './CardWidget';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar bg="dark" expand="sm" className="customNavbar">
            <Container className="d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div>
                    <Navbar.Brand href="#home" className="logoNav">
                        Ignis
                    </Navbar.Brand>
                </div>

                {/* Toggle + Links */}
                <div className="align-items-center toggleLinksContainer">
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={toggleMenu}
                        className="customToggler"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>

                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className={`collapse navbar-collapse ${
                            isOpen ? 'show' : ''
                        }`}
                    >
                        <Nav className="ms-auto opcionesNav">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#productos">Productos</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

                {/* CardWidget */}
                <div className="cardWidgetContainer">
                    <CardWidget />
                </div>
            </Container>
        </Navbar>
    );
};
