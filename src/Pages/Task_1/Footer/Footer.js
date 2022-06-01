import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <h1>hi footer</h1>
            <div className='m-5'>
                <Row>
                    <Col sm="12" md="4" style={{ textAlign: "center" }}>
                        <div>
                            <h5 style={{ color: "blue" }}>We are social</h5>
                            <h4 className='my-2 mt-3'>Follow US</h4>
                            <img src="/Images/Social.png" className='my-3' alt="" />
                            <h3 className="fw-bold">LOGO  </h3>
                        </div>
                    </Col>
                    <Col sm="12" md="2" >
                        <div>
                            <p style={{ color: "blue" }}>Links</p>
                            <div className="fw-bold">
                                <p>ADVERTISERS</p>
                                <p>PUBLISHERS</p>
                                <p>INFLUENCER</p>
                                <p>AD FORMATS</p>
                            </div>

                        </div>
                    </Col>
                    <Col sm="12" md="3">
                        <div >
                            <p style={{ color: "blue" }}>We are social</p>
                            <div className="fw-bold">
                                <p>TRAMS 7 CONDITIONS</p>
                                <p>PRIVACY POLICY</p>
                                <p>CANCELLATION POLICY</p>
                                <p >BLOG</p>
                            </div>

                        </div>
                    </Col>
                    <Col sm="12" md="3">
                        <div>
                            <p style={{ color: "blue" }}>We are social</p>
                            <div className="fw-bold">
                                <p>FAQ</p>
                                <p>MEDIA KIT</p>
                                <p>CONTACT US</p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;