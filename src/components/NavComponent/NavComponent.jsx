import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartComponent } from '../CartComponent';
import { Link } from 'react-router-dom';

export const NavComponent = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand>
                <Link to="/">Mandarin</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                    <Link style={{margin: '10px'}} to="/category/home-decoration">Decoraciones</Link>
                    <Link style={{margin: '10px'}} to="/category/furniture">Muebleria</Link>
                    <Link style={{margin: '10px'}} to="/category/lighting">Iluminación</Link>
            </Nav>
            <CartComponent />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}