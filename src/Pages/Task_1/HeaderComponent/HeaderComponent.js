import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeaderComponent = () => {

    return (
        <Container style={{ textAlign: "center" }}>
            <Row>
                <Col className='my-5' sm={12} md={5}>
                    <h1>Welcome To Our Website</h1>
                    <h6> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque suscipit officia molestiae nam. Id quo aspernatur, recusandae facilis labore voluptatem sapiente expedita placeat sit atque asperiores ullam provident perspiciatis dignissimos.</h6>
                </Col>
                <Col className='my-5' sm={12} md={7}>
                    <img src="/Images/header_img.jpg" alt="" width="50%" />
                </Col>
            </Row>

        </Container>
    );
};

export default HeaderComponent;