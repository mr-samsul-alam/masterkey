import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';


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
            <h1>Our Features</h1>
            <Container>
                <Button onClick={btn1Clicked}>POP-UNDER</Button>
                <Button onClick={btn2Clicked}>BANNER ADD</Button>
                <Button onClick={btn3Clicked}>NATIVE</Button>
                <Button onClick={btn4Clicked}>SKIM</Button>




                <Card style={{ display: tab1 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Card.Img variant="top" src="/Images/header_img.jpg" style={{ width: '25rem' }} />
                    <Card.Body>
                        <Card.Title>POP-UNDER</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="/">Learn More</Card.Link>
                    </Card.Body>
                </Card>


                <Card style={{ display: tab2 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Card.Img variant="top" src="/Images/header_img.jpg" style={{ width: '25rem' }} />
                    <Card.Body>
                        <Card.Title>BANNER ADD</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="/">Learn More</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ display: tab3 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Card.Img variant="top" src="/Images/header_img.jpg" style={{ width: '25rem' }} />
                    <Card.Body>
                        <Card.Title>NATIVE</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="/">Learn More</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ display: tab4 ? 'flex' : 'none', flexDirection: 'row' }}>
                    <Card.Img variant="top" src="/Images/header_img.jpg" style={{ width: '25rem' }} />
                    <Card.Body>
                        <Card.Title>SKIM</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="/">Learn More</Card.Link>
                    </Card.Body>
                </Card>
            </Container>

        </div >
    );
};

export default FeaturesComponent;