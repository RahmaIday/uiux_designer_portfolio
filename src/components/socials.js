import React from "react";
import GITLOGO from '../assets/images/GitHub_logo.png';
import LinkedInLogo from '../assets/images/linkedin-icon.png';
import './socials.css';

function Socials() {

    const openGithub = () => {
        window.open('https://github.com/RahmaIday', '_blank');
    };

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/rahma-idayathulla-36850123a', '_blank');
    };

    return (
        <div>
        <div className='socials-div'>
            <img
                alt='Linked In'
                className='socials-logo'
                src={LinkedInLogo}
                onClick={openLinkedIn}
            />
        </div>
        <br></br>
        </div>
        
    );
}

export default Socials;
