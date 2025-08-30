import NavBar from '../sections/Navbar';
import Education from '../sections/education';
import Greeting from '../sections/Greeting';
import Projects from '../sections/projects';
import Skills from '../sections/skills';
import Footer from '../sections/footer';

function LandingPage() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Greeting></Greeting>
      <Education></Education>
    </div>
  );
}

export default LandingPage;
