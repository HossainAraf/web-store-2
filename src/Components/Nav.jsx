// IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import LoginScreen from './LogIn';
import '../Styles/index.css';
import '../Styles/nav.css';

// COMPONENT
const Nav = () => {
    return (
      <div className="nav-wrapper flex-row">
        <h1>U_Mart</h1>
        <nav className="nav flex-row">   
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
      </div>
    );
};

export default Nav;