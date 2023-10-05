// IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import LoginScreen from './LogIn';
import '../index.css'
import '../Styles/nav.css'

// COMPONENT
const Nav = () => {
    return (
        <nav className="nav flex-row">
            <h1>U_Mart</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">
              <button>Log in: {LoginScreen}</button>
            </Link>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
        </nav>
    );
};

export default Nav;