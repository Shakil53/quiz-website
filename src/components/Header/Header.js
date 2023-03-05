import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header container  p-2 shadow p-3 mb-5 bg-body-tertiary rounded mt-2 bg-info d-flex justify-content-between '>
            <div className='img'>
                <img alt='company-logo' src='https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_6568572.png'></img>
            </div>
            <nav className='nav'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>

                <Link to="Quiz">Quiz</Link>
                <Link to="/">Course</Link>
                <Link to="order">Order</Link>
            </nav>
        </div>
    );
};

export default Header;