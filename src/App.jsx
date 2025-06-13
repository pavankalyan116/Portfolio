import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Skills from './assets/components/Skills'
import Education from './assets/components/Education'
import Experience from './assets/components/Experience'
import Certificates from './assets/components/Certificates'
import Contact from './assets/components/Contact'

import './App.css'
import './index.css';



const App = () => {
  return (
    <div>
      
      <header className="custom-navbar py-4">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <a href="#" className="logo fw-bold fs-2 mb-3 mb-md-0" style={{ color: "#a020f0" }}>
            Sai Pavan Kalyan Kotakommula
          </a>
          <nav>
            <ul className="nav custom-nav">
              <li className="nav-item">
                <a href="#home" className="nav-link active" data-section="home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link" data-section="skills">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#education" className="nav-link" data-section="education">Education</a>
              </li>
              <li className="nav-item">
                <a href="#experience" className="nav-link" data-section="experience">Experience</a>
              </li>
              <li className="nav-item">
                <a href="#certificates" className="nav-link" data-section="certificates">Certificates</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" data-section="contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      
      <section className="home section-bg-home py-5" id="home">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="home-img mb-4 mb-md-0 me-md-5 text-center">
            <img src="/images/my-pic.jpg" alt="Profile" className="profile-img-glow" />
          </div>
          <div className="home-content text-center text-md-start">
            <h1 className="fw-bold" style={{ fontSize: "3rem", color: "#fff" }}>
              Hi, It's <span style={{ color: "#a020f0" }}>Pavan kalyan</span>
            </h1>
            <h2 className="fw-bold mb-3" style={{ color: "#fff" }}>
              I'm a <span style={{ color: "#a020f0" }}>Web Designer</span>
            </h2>
            <p className="mb-4" style={{ color: "#ccc", fontSize: "1.1rem" }}>
              Enthusiastic and detail-oriented FullStack Developer with a strong foundation in JAVA, Nodejs,
              and ReactJs. Experienced in creating responsive web designs and integrating user-friendly
              interfaces. Passionate about crafting innovative solutions that enhance user experiences. Skilled in
              adapting to dynamic projects and collaborating effectively within diverse teams.
            </p>
            <div className="social-icons mb-4">
              <a href="https://www.linkedin.com/in/pavankalyan-kotakommulaommula-226572210" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/pavankalyan116" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <FaGithub />
              </a>
              <a href="https://x.com/pavankalyan166" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/pavankalyankotakommula/" target="_blank" rel="noopener noreferrer" className="icon-btn">
                <FaInstagram />
              </a>
            </div>
            <a href="#contact" className="btn btn-outline-custom px-5 py-2 fw-bold">Hire me</a>
          </div>
        </div>
      </section>

      
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;



