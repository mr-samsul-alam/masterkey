import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const ServicesComponents = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className='pt-5'>
                <h1>Our Services</h1>
            </div>
            <Container>
                <Row className='my-5'>
                    <Col sm="12" md="4" >
                        <div className='mt-2'>
                            <img src="/Images/mic.png" className="rounded-circle" alt="" />
                            <h5 className='my-2'>MIC Icon</h5>
                            <Button className='rounded-pill px-5' style={{ backgroundColor: "#644F9C" }}> Learn more</Button>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='mt-2'>
                            <img src="/Images/telegram.png" className="rounded-circle" alt="" />
                            <h5 className='my-2'>Telegram Icon</h5>
                            <Button className='rounded-pill px-5' style={{ backgroundColor: "#644F9C" }}> Learn more</Button></div>

                    </Col>
                    <Col sm="12" md="4">
                        <div className='mt-2'>
                            <img src="/Images/Icon_3.png" className="rounded-circle" alt="" />
                            <h5 className='my-2'>Icon</h5>
                            <Button className='rounded-pill px-5' style={{ backgroundColor: "#644F9C" }}> Learn more</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesComponents;