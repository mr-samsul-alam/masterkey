import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const DetailsCards = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col sm="12" md="6" lg="3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/Images/Card-1.png" />
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/Images/card-2.png" />
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/Images/card-3.png" />
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/Images/card-4.png" />
                            <Card.Body>
                                <button className='rounded-pill' style={{ position: "relative" }}> <span style={{ position: "absolute", top: '-15px', background: 'white' }}>Login</span> <img src="/Images/LoginICON.png" alt="" style={{ marginRight: "30px", padding: "5px" }} /><span style={{ color: 'red' }}>Online</span><span style={{ color: 'green', marginRight: "30px" }}>Trading</span></button>



                                <button className='rounded-pill mt-4 p-3'> <span style={{ color: 'red', marginLeft: "30px" }}>IPO</span><span style={{ color: 'green', marginRight: "30px" }}>Results</span></button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailsCards;