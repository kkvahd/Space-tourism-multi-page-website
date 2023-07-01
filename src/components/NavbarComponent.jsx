import React from 'react';

import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';


import logo from '../assets/shared/logo.svg'

const navLinkColor = { color: 'white' };

export const NavbarComponent = () => {
    return (
        <Container fluid style={{ height: '15vh' }}>
            <Navbar>
                <Container fluid style={{ padding: '0px', height: '100%' }}>
                    <Row style={{width: '100%'}}>
                        <Col>
                            <Navbar.Brand href="#home" >
                                <img
                                    src="../src/assets/shared/logo.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </Col>
                        <Col>
                            <hr style={{ color: 'white' }} />
                        </Col>
                        <Col>
                            <Nav className="justify-content-end" style={{ backdropFilter: 'blur(20px)' }}>
                                <Nav.Link style={navLinkColor} href="#home">00 HOME</Nav.Link>
                                <Nav.Link style={navLinkColor} href="#link">01 DESTINATION</Nav.Link>
                                <Nav.Link style={navLinkColor} href="#link">02 CREW</Nav.Link>
                                <Nav.Link style={navLinkColor} href="#link">03 TECHNOLOGY</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Container>
    )
}
