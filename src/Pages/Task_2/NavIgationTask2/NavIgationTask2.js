import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationTask2.css'
const NavIgationTask2 = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container  >
                    <Navbar.Brand href="#home"> <img src="/Images/logo.png" alt="" width="20%" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='btn-grad' style={{ color: 'white', paddingLeft: '30px', paddingRight: "30px" }}>Home</Nav.Link>
                            <Nav.Link href="#link" className='btn-grad' style={{ color: 'white', paddingLeft: '30px', paddingRight: "30px" }}>Product & Services</Nav.Link>
                            <Nav.Link href="#link" className='btn-grad' style={{ color: 'white', paddingLeft: '30px', paddingRight: "30px" }}>Become a Client</Nav.Link>
                            <Nav.Link href="#link" className='btn-grad' style={{ color: 'white', paddingLeft: '30px', paddingRight: "30px" }}>About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavIgationTask2;