import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './NavbarTask1.css'
import SiteNav from './SiteNav/SiteNav';

const NavbarTask1 = () => {
    const [homeClick, setHomeClick] = useState(false)
    const [advertisementClick, setAdvertisementClick] = useState(true)
    const [publisherClick, setPublisherClick] = useState(false)
    const [influencerClick, setInfluencerClick] = useState(false)
    const [AdClick, setAdClick] = useState(false)
    const [blogClick, setBlogClick] = useState(false)
    const [contactClick, setContactClick] = useState(false)
    const [loginActive, setLoginActive] = useState(true)
    const [signupActive, setSignupActive] = useState(false)

    const homeClicked = () => {
        setHomeClick(true)
        setAdvertisementClick(false)
        setPublisherClick(false)
        setInfluencerClick(false)
        setAdClick(false)
        setBlogClick(false)
        setContactClick(false)
    }
    const advertisementClicked = () => {
        setAdvertisementClick(true)
        setHomeClick(false)
        setPublisherClick(false)
        setInfluencerClick(false)
        setAdClick(false)
        setBlogClick(false)
        setContactClick(false)
    }
    const publisherClicked = () => {
        setPublisherClick(true)
        setAdvertisementClick(false)
        setHomeClick(false)
        setInfluencerClick(false)
        setAdClick(false)
        setBlogClick(false)
        setContactClick(false)
    }
    const influencerClicked = () => {
        setInfluencerClick(true)
        setPublisherClick(false)
        setAdvertisementClick(false)
        setHomeClick(false)
        setAdClick(false)
        setBlogClick(false)
        setContactClick(false)
    }
    const AdClicked = () => {
        setAdClick(true)
        setPublisherClick(false)
        setAdvertisementClick(false)
        setHomeClick(false)
        setInfluencerClick(false)
        setBlogClick(false)
        setContactClick(false)
    }
    const blogClicked = () => {
        setBlogClick(true)
        setPublisherClick(false)
        setAdvertisementClick(false)
        setHomeClick(false)
        setInfluencerClick(false)
        setAdClick(false)
        setContactClick(false)
    }
    const contactClicked = () => {
        setContactClick(true)
        setPublisherClick(false)
        setAdvertisementClick(false)
        setHomeClick(false)
        setInfluencerClick(false)
        setAdClick(false)
        setBlogClick(false)
    }
    const logInclick = () => {
        setLoginActive(true)
        setSignupActive(false)
    }
    const signupclick = () => {
        setLoginActive(false)
        setSignupActive(true)
    }

    return (
        <div>
            <SiteNav></SiteNav>
            <div className='task1NavBar px-5'>
                <div>
                    <Nav

                        activeKey="/"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: homeClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={homeClicked}>HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: advertisementClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={advertisementClicked}>ADVERTISEMENT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: publisherClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={publisherClicked}>PUBLISHER</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: influencerClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={influencerClicked}>INFLUENCER</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: AdClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={AdClicked}>AD FORMATS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: blogClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={blogClicked}>BLOG</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navOnHover" style={{ color: contactClick ? '#ff6f00' : undefined, fontWeight: 'bolder' }} onClick={contactClicked} >CONTACT US</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div>
                    <div className='p-2 px-3 rounded-pill d-flex flex-row' style={{ background: '#dee2e6', }}>
                        <div onClick={logInclick} className='px-3 p-2 rounded-pill' style={{ background: loginActive ? "#ff6f00" : undefined, color: loginActive ? 'white' : undefined, cursor: 'pointer', }}>login</div>
                        <div onClick={signupclick} className='px-3  p-2 rounded-pill' style={{ background: signupActive ? "#ff6f00" : undefined, color: signupActive ? 'white' : undefined, cursor: 'pointer', }}>signUp</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarTask1;