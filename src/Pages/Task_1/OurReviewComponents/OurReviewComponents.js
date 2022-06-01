import React from 'react';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Card, Container } from 'react-bootstrap';
import './OurReviewComponents.css'
const OurReviewComponents = () => {
    return (
        <Container>
            <OwlCarousel
                className='owl-theme'
                items="2"
                autoplay
                nav
                dots
            >
                <div className="item">
                    <Card className='cardStyle'>
                        <Card.Img variant="top" src="/Images/Card-1.png" style={{ width: "400px", height: '200px' }} />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item">
                    <Card className='cardStyle' >
                        <Card.Img variant="top" src="/Images/card-2.png" style={{ width: "400px", height: '200px' }} />
                        <Card.Body>
                            <Card.Title>Card Title 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item">
                    <Card className='cardStyle' >
                        <Card.Img variant="top" src=" /Images/card-3.png" style={{ width: "400px", height: '200px' }} />
                        <Card.Body>
                            <Card.Title>Card Title 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item">
                    <Card className='cardStyle' >
                        <Card.Img variant="top" src=" /Images/card-4.png" style={{ width: "400px", height: '200px' }} />
                        <Card.Body>
                            <Card.Title>Card Title 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item">
                    <Card className='cardStyle' >
                        <Card.Img variant="top" src="/Images/Card5.png" style={{ width: "400px", height: '200px' }} />
                        <Card.Body>
                            <Card.Title>Card Title 5</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item">
                    <Card className='cardStyle' >
                        <Card.Img variant="top" src="/Images/header_img.jpg" style={{ width: "400px", height: '200px' }} />
                        <Card.Body>
                            <Card.Title>Card Title 6</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </OwlCarousel>
        </Container>
    );
};

export default OurReviewComponents;