import React from 'react';
import AchievementComponents from './AchievementComponents/AchievementComponents';
import FeaturesComponent from './FeaturesComponent/FeaturesComponent';
import Footer from './Footer/Footer';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import NavbarTask1 from './NavbarTask1/NavbarTask1';
import OurReviewComponents from './OurReviewComponents/OurReviewComponents';
import ServicesComponents from './ServicesComponents/ServicesComponents';

const Task1Page = () => {
    return (
        <div>
            <NavbarTask1 />
            <HeaderComponent />
            <ServicesComponents />
            <FeaturesComponent />
            <AchievementComponents /> 
            <OurReviewComponents />
            <Footer />
        </div>
    );
};

export default Task1Page;