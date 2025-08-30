import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/images/logo.png';
import Details from '../details/Intro.js';

function NavBar() {

    return (
        <div className="navbar-container">
            <Link to="/uiux_designer_portfolio/">
            <img src={Logo} className='logo-image' alt='Nav-logo' />
            </Link>

            <div>
                <div className='name'>{Details.Name.toUpperCase()}</div>
                <div className='position'>{Details.Position.toUpperCase()}</div>
            </div>

        </div>
    );
}

export default NavBar;
