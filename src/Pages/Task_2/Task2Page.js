import React from 'react';
import DetailsCards from './DetailsCards/DetailsCards';
import HeaderTask2 from './HeaderTask2/HeaderTask2';
import NavIgationTask2 from './NavIgationTask2/NavIgationTask2';

const Task2Page = () => {
    return (
        <div>
            <NavIgationTask2 />
            <HeaderTask2 />
            <DetailsCards />
        </div>
    );
};

export default Task2Page;