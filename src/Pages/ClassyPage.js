import './ClassyPage.css';
import NavBar from '../sections/Navbar';
import Footer from '../sections/footer';
import wireframeImage from '../assets/images/classy-wireframe.png'; // your wireframe
import w2 from '../assets/images/w2.png'

function ClassyPage() {
  return (
    <div className="classy-page">
      <NavBar />

      <main className="project-content">
        <h1 className="project-title">Classy: Course Navigation Bot</h1>

        {/* Problem Statement */}
        <section className="project-section">
          <h2 className="section-title">Problem Statement</h2>
          <p className="section-text">
            At RMIT, students often face an overwhelming number of electives—20+ in a semester—with each course detailed on a separate page. 
            Comparing courses required opening multiple tabs, manually checking assessments, availability, and personal interest, creating a tedious and time-consuming process.
          </p>
        </section>

        {/* Student Pain Points */}
        <section className="project-section">
          <h2 className="section-title">Student Pain Points</h2>
          <ul className="section-text">
            <li>Too many pages to navigate to gather course information</li>
            <li>Difficulty comparing assessments across courses</li>
            <li>Uncertainty about which courses are offered each semester</li>
            <li>High cognitive load and wasted time during course selection</li>
          </ul>
        </section>

        {/* Solution */}
        <section className="project-section">
          <h2 className="section-title">Solution</h2>
          <p className="section-text">
            Classy is an AI-powered course navigation bot that streamlines this process. Students can directly ask questions about courses, assessments, and availability instead of manually navigating multiple pages. 
            This reduces interaction cost, saves time, and empowers students to make informed choices with minimal friction.
          </p>
        </section>

        {/* Wireframes */}
        <section className="project-section">
          <h2 className="section-title">Wireframes</h2>
          <div className="wireframe-container">
            <img
              src={w2}
              alt="Classy Wireframe"
              className="wireframe-image"
            />
            
          </div>
          <div className="wireframe-container">
            <img
              src={wireframeImage}
              alt="Classy Wireframe"
              className="wireframe-image"
            />
            
          </div>
        </section>
      </main>

    </div>
  );
}

export default ClassyPage;
