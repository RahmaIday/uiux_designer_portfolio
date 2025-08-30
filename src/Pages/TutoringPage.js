import './TutoringPage.css';
import NavBar from '../sections/Navbar';
import Footer from '../sections/footer';
import tw1 from '../assets/images/tw1.png'; // add your wireframe image here
import tw2 from '../assets/images/tw2.png'; // add your wireframe image here
import tw3 from '../assets/images/tw3.png'; // add your wireframe image here

function TutoringPage() {
  return (
    <div className="tutoring-page">
      <NavBar />

      <main className="project-content">
        <h1 className="project-title">Tutoring Console: Spectrum Online Redesign</h1>

        {/* Problem Statement */}
        <section className="project-section">
          <h2 className="section-title">Problem Statement</h2>
          <p className="section-text">
            While working at Spectrum Tuition, students were not completing their weekly materials online because the existing site was difficult to navigate. 
            As a result, students often came to sessions unprepared, and administrators struggled to keep course materials updated, which caused frustration and inefficiencies.
          </p>
        </section>

        {/* Student Pain Points */}
        <section className="project-section">
          <h2 className="section-title">Student Pain Points</h2>
          <ul className="section-text">
            <li>Difficulty finding and accessing weekly learning materials</li>
            <li>High frustration due to confusing navigation and outdated content</li>
            <li>Lack of motivation or consistency in completing tasks online</li>
          </ul>
        </section>

        {/* Admin Pain Points */}
        <section className="project-section">
          <h2 className="section-title">Admin Pain Points</h2>
          <ul className="section-text">
            <li>Hard to update and manage course materials</li>
            <li>Outdated resources causing confusion for students</li>
            <li>Time-consuming manual content management</li>
          </ul>
        </section>

        {/* Solution */}
        <section className="project-section">
          <h2 className="section-title">Solution</h2>
          <p className="section-text">
            I created wireframes for a redesigned Spectrum Online website that simplified navigation for students and improved accessibility to weekly materials. 
            The new design also streamlines administrative tasks, allowing admins to easily update courses and resources. 
            This redesign encourages students to complete their materials on time and reduces administrative friction.
          </p>
        </section>

        {/* Wireframes */}
        <section className="project-section">
          <h2 className="section-title">Wireframes</h2>
          <div className="wireframe-container">
            <img
              src={tw1}
              alt="Tutoring Console Wireframe"
              className="wireframe-image"
            />
          </div>
          <div className="wireframe-container">
            <img
              src={tw2}
              alt="Tutoring Console Wireframe"
              className="wireframe-image"
            />
          </div>
          <div className="wireframe-container">
            <img
              src={tw3}
              alt="Tutoring Console Wireframe"
              className="wireframe-image"
            />
          </div>
        </section>
      </main>

    </div>
  );
}

export default TutoringPage;
