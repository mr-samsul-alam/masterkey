import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HeaderTask2 = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="/Images/Task-2-caro-2.png"
                        alt="First slide"
                        style={{ height: '500px' }}
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/Task-2-caro-3.png"
                        alt="Second slide"
                        style={{ height: '500px' }}
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/task2-caro-4.png"
                        alt="3rd slide"
                        style={{ height: '500px' }}
                    />


                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default HeaderTask2;