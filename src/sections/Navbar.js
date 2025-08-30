import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../assets/images/logo.png';
import Details from '../details/Intro.js';

function NavBar() {

    return (
        <div className="navbar-container">
            <img src={Logo} className='logo-image' alt='Nav-logo' />
            <div className='name'>{Details.Name}</div>
        </div>
    );
}

export default NavBar;
