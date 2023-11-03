import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartComponent from '../CartComponent/CartComponent';

const NavComponent = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">Mandarin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Informacion</Nav.Link>
                <Nav.Link href="#link">Productos</Nav.Link>
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <CartComponent />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavComponent;