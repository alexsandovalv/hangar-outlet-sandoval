import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { FaUser, FaUserGraduate } from "react-icons/fa";
import logo from '../assets/img/logo.png';
import Cartwidget from './Cartwidget/Cartwidget';

const NavbarHO = () => {
    return (
        <>
            <Navbar bg="light" variant="light" expand='lg'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            alt=""
                            src={logo}
                            width="90"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Hangar Outlet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/hombre' >Hombre</Nav.Link>
                            <Nav.Link as={Link} to='/mujer' href="#features">Mujeres</Nav.Link>
                            <Nav.Link as={Link} to='/ninos' href="#pricing">Niños</Nav.Link>
                            <Nav.Link as={Link} to='/about' href="#pricing">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to='/contact' href="#pricing">Contactenos</Nav.Link>
                        </Nav>

                        <Button variant="outline-secondary">
                            <FaUserGraduate />  Registrar</Button>
                        <Button variant='dark' className="mx-1">
                            <FaUser /> {' '} Login
                        </Button>
                        <Cartwidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet />
            </section> 


        </>
    )
}

export default NavbarHO
