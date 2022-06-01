import React from 'react';
import FeaturesComponent from './FeaturesComponent/FeaturesComponent';
import Footer from './Footer/Footer';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import NavbarTask1 from './NavbarTask1/NavbarTask1';
import OurReviewComponents from './OurReviewComponents/OurReviewComponents';

const Task1Page = () => {
    return (
        <div>
            <NavbarTask1 />
            <HeaderComponent />
            <FeaturesComponent />
            <OurReviewComponents />
            <Footer />
        </div>
    );
};

export default Task1Page;