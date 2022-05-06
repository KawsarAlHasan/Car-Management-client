import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/logo.png';

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="/home"><img src={logo} className='w-50' alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/blogs">BLOGS</Nav.Link>
                        <Nav.Link href="/items">ITEMS</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">FAQS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Happy Clients says</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                        <Nav.Link href="#deets">SIGN UP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;