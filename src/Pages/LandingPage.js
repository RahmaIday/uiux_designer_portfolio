import NavBar from '../sections/Navbar';
import Education from '../sections/education';
import Greeting from '../sections/Greeting';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="layout-container">
      <NavBar></NavBar>
      <Greeting></Greeting>
      <Education></Education>
    </div>
  );
}

export default LandingPage;
