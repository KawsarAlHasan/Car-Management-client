import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../images/logo.png';

const Header = (props) => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className='text-center' collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="/home"><img src={logo} className='w-50' alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/manageInventories">MANAGE INVENTORIES</Nav.Link>
                        <Nav.Link href="/blogs">BLOGS</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <Nav.Link href="/login" onClick={handleSignOut}>SIGN OUT</Nav.Link>
                                :
                                <>
                                    <Nav.Link href="/login">LOGIN</Nav.Link>
                                    <Nav.Link href="/signup">SIGN UP</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;