import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AchievementComponents = () => {
    return (
        <div style={{ background: "#644F9C", textAlign: 'center', color: 'white' }}>
            <div className='pt-5'>
            <h1>Our Achievement</h1>
            </div>
            <Container>
                <Row className='my-5'>
                    <Col sm="12" md="4" >
                        <div className='my-5' style={{ border: '3px dotted white', borderRadius: "50%", }}>
                            <div className='my-5 py-5'>
                                <h1 className='mt-5 '>1 BN+</h1>
                                <h3 className='mt-4 pt-4'>Daily Impressions</h3>
                            </div>
                        </div>

                    </Col>
                    <Col sm="12" md="4">
                        <div className='my-5' style={{ border: '3px solid white', borderRadius: "50%", backgroundColor: 'white' }}>
                            <div className='my-5 py-5' style={{ color: "#644F9C" }}>
                                <h1 className='mt-5 '>$500k+</h1>
                                <h3 className='mt-4 pt-4'>Paid</h3>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='my-5' style={{ border: '3px solid #FF6F00', borderRadius: "50%", backgroundColor: '#FF6F00' }}>
                            <div className='my-5 py-5' style={{ color: "white" }}>
                                <h1 className='mt-5'>8k+</h1>
                                <h3 className='mt-4 pt-4'>Global Publisher</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AchievementComponents;