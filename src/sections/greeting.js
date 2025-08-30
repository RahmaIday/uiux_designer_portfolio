import landingImage from '../assets/images/landingImage.jpg'
import wave from '../assets/images/wave.png'
import './Greeting.css';
import Socials from '../components/socials';
import {Fade} from "react-awesome-reveal";

function Greeting(){
    return(
        <Fade bottom duration={1000} distance="40px">
        <div className='greeting-main'>
            <div className='greeting-text-div'>
                <h1 className='greeting-text'>Hello, I'm Rahma 
                    <span class="wave-emoji">
                    <img
                        alt="👋"
                        draggable="false"
                        src={wave}
                        class="wave-img"
                    />
                    </span>
                </h1>
                <div className='greeting-text-p'>
                A dedicated <b>UI/UX designer</b> passionate
                about translating <b>user behaviours</b> into intuitive designs  
                and curating <b>digital platforms</b> that align user needs with business goals.
                </div>
                <br></br>
                <Socials></Socials>
            </div>
            <div className='greeting-image-div'>
                <img alt='landingImage' className='data-image' src={landingImage}/>            
            </div>
        </div>
        </Fade>
    )
}

export default Greeting;