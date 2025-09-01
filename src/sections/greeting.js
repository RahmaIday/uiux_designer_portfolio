import project1Image from '../assets/images/project1.png'
import project2Image from '../assets/images/project2.png'
import wave from '../assets/images/wave.png'
import './Greeting.css';
import Socials from '../components/socials';
import {Fade} from "react-awesome-reveal";
import { Link } from 'react-router-dom';

function Greeting(){
    return(
        <div className='greeting-main'>
            <div className='greeting-text-div'>
                <h1 className='greeting-text'>Hello, I'm Rahma 
                    <span className="wave-emoji">
                    <img
                        alt="👋"
                        draggable="false"
                        src={wave}
                        className="wave-img"
                    />
                    </span>
                </h1>
                <div className='greeting-text-p'>
                A dedicated <b>UI/UX designer</b> passionate
                about translating <b>user behaviours</b> into intuitive designs  
                and curating <b>digital platforms</b> that align user needs with business goals.
                </div>
                <br />
                <Socials />
            </div>
            <div className='greeting-image-div'>
                <Link to="/uiux_designer_portfolio/classy">
                    <div className="image-card">
                    <img alt='Project 1' className='data-image' src={project1Image}/>
                    <div className="image-title">
                        <p>Classy</p>
                        <p className='description'>
                        A course navigation bot that supports students in making informed subject choices while reducing the stress and confusion of academic planning.
                        </p>
                    </div>
                    </div>
                </Link>

                <Link to="/uiux_designer_portfolio/tutoring-console">
                    <div className="image-card">
                    <img alt='Project 2' className='data-image' src={project2Image}/>
                    <div className="image-title">
                        <p>Tutoring Console</p>
                        <p className='description'>
                        A web platform where students can access weekly learning materials and videos, while administrators can easily upload, edit, and manage those resources.
                        </p>
                    </div>
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default Greeting;
