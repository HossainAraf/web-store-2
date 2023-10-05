// IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENT
const Nav = () => {
    return (
        <nav>
            <h1>U_Mart</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
        </nav>
    );
};

export default Nav;