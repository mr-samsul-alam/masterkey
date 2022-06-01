import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './FeaturesComponent.css'

const FeaturesComponent = () => {
    const [tab1, setTab1] = useState(false)
    const [tab2, setTab2] = useState(true)
    const [tab3, setTab3] = useState(false)
    const [tab4, setTab4] = useState(false)
    const btn1Clicked = () => {
        setTab1(true)
        setTab2(false)
        setTab3(false)
        setTab4(false)
    }
    const btn2Clicked = () => {
        setTab1(false)
        setTab2(true)
        setTab3(false)
        setTab4(false)
    }
    const btn3Clicked = () => {
        setTab1(false)
        setTab2(false)
        setTab3(true)
        setTab4(false)
    }
    const btn4Clicked = () => {
        setTab1(false)
        setTab2(false)
        setTab3(false)
        setTab4(true)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }} className='my-5 pt-5'>Our Features</h1>
            <Container className='my-5'>
                <div className='my-5' style={{ textAlign: "center", display: 'flex', justifyContent: 'space-around' }}>
                    <button
                        onClick={btn1Clicked}
                        style={{
                            background: tab1 ? "#ff6f00" : undefined,
                            color: tab1 ? "white" : undefined
                        }}
                        className="rounded-pill  Fbtn "
                    >POP-UNDER</button>
                    <button onClick={btn2Clicked} style={{
                        background: tab2 ? "#ff6f00" : undefined,
                        color: tab2 ? "white" : undefined
                    }}
                        className="rounded-pill  Fbtn ">BANNER ADD</button>
                    <button onClick={btn3Clicked} style={{
                        background: tab3 ? "#ff6f00" : undefined,
                        color: tab3 ? "white" : undefined
                    }}
                        className="rounded-pill  Fbtn ">NATIVE</button>
                    <button onClick={btn4Clicked} style={{
                        background: tab4 ? "#ff6f00" : undefined,
                        color: tab4 ? "white" : undefined
                    }}
                        className="rounded-pill  Fbtn ">SKIM</button>
                </div>

                <div style={{ display: tab1 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Row>
                        <Col sm="12" md="6">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/Card-1.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block  "
                                        src="/Images/card-2.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/card-3.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm="12" md="6">
                            <div>
                                <h6 style={{ color: '#FF6F00' }}>POP-UNDER</h6>
                                <p>
                                    A company is a legal entity formed by a group of individuals to engage in and operate a business—commercial or industrial—enterprise. A company may be organized in various ways for tax and financial liability purposes depending on the corporate law of its jurisdiction.
                                </p>
                                <Card.Link href="/">Learn More</Card.Link>
                            </div>
                        </Col>
                    </Row>

                </div>


                <div style={{ display: tab2 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Row>
                        <Col sm="12" md="6">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/card-2.png"

                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block  "
                                        src="/Images/Card-1.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/card-3.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm="12" md="6">
                            <div>
                                <h6 style={{ color: '#FF6F00' }} >BANNER ADD</h6>
                                <p>
                                    The line of business the company is in will generally determine which business structure it chooses such as a partnership, proprietorship, or corporation. These structures also denote the ownership structure of the company.
                                </p>
                                <Card.Link href="/">Learn More</Card.Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{ display: tab3 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Row>
                        <Col sm="12" md="6">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/Card-1.png"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block  "
                                        src="/Images/card-3.png"

                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/card-2.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm="12" md="6">
                            <div>
                                <h6 style={{ color: '#FF6F00' }}>NATIVE</h6>
                                <p>
                                    They can also be distinguished between private and public companies. Both have different ownership structures, regulations, and financial reporting requirements.
                                </p>
                                <Card.Link href="/">Learn More</Card.Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{ display: tab4 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Row>
                        <Col sm="12" md="6">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/card-3.png"

                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block  "
                                        src="/Images/card-2.png"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: "200px", width: "350px" }}
                                        className="d-block "
                                        src="/Images/Card-1.png"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col sm="12" md="6">
                            <div>
                                <h6 style={{ color: '#FF6F00' }}>SKIM</h6>
                                <p>
                                    A company is essentially an artificial person—also known as corporate personhood—in that it is an entity separate from the individuals who own, manage, and support its operations.
                                </p>
                                <Card.Link href="/">Learn More</Card.Link>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>

        </div >
    );
};

export default FeaturesComponent;