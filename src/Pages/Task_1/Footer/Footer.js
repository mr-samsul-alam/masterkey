import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'; 
const Footer = () => {
    return (
        <div>
            <h1>hi footer</h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="12" lg="4">
                        <div>
                            <h6>We are social</h6>
                            <h6>Follow US</h6> 
                            <h6>LOGO  </h6>
                        </div>
                    </Col>
                    <Col xs="12" lg="2">
                        3 of 3
                    </Col>
                    <Col xs="12" lg="2">
                        1 of 3
                    </Col>
                    <Col xs="12" lg="2">
                        3 of 3
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;