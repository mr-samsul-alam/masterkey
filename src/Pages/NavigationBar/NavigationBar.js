import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css'
const NavigationBar = () => {
    return (
        <div className='navContainer'>
            <Nav className="justify-content-center align-items-center" activeKey="/home">
                <Nav.Item  >
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeClassName" : 'none'
                    } to="/task1" style={{
                        textDecoration: "none",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                    }}>Task 1</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className={({ isActive }) =>
                        isActive ? "activeClassName" : "none"
                    } to="/task2" style={{
                        textDecoration: "none",
                        paddingLeft: "20px",
                        paddingRight: "20px"
                    }}>Task 2</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavigationBar;