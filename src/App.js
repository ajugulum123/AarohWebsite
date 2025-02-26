import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`app-container ${menuOpen ? "menu-open" : ""}`}>
      {/* Navigation Bar */}
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <div className="menu-items">
            {["Home", "About", "Portfolio", "Contact"].map((section) => (
              <a key={section} href={`#${section.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {section}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Home Section */}
      <section id="home" className="section home">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Hi, I'm Aaroh!
        </motion.h1>
        <div className="profile-image-container">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHjwD-E-MvGeg/profile-displayphoto-shrink_400_400/B4EZPhzKcpGYAk-/0/1734660106615?e=1746057600&v=beta&t=KYCzt2-IsGGNnMrLiMxiKr0O67YXG-jkgNqsWZw_LC0"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Currently a fourth-year Data Science and Mathematics student at Northeastern University.
          Outside of the classroom/workplace, I enjoy watching international soccer, diving deep into new music, and expanding my skill set while applying it to my interests.
          My love for data and its power push me to learn new techniques that can hopefully yield solutions for pressing issues in both the corporate world and general society.
          My curiosities within Data Science include Machine Learning, Data Engineering & Data Analytics.
        </p>
        <div className="image-gallery">
          <img src="https://canadasoccer.com/wp-content/uploads/2022/09/UEFA_UCL_www.jpg" alt="Champions League" className="rounded-image" />
          <img src="https://websiteserviceapi.azurewebsites.net/api/Images/1423586/5" alt="Soccer Image" className="rounded-image" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio">
        <h2>Portfolio</h2>
        <p>Check out some of my work:</p>
        <div className="project-container">
          <div className="project">
            <img
              src="https://media.licdn.com/dms/image/v2/C5612AQHoZitHy1sFgA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1611846088031?e=2147483647&v=beta&t=bkgQMVnDrsYnU0HCkK8ko3sZF36wrDROJq-Hl5q-_BA"
              alt="LinkedIn Networking Email Generator"
              className="portfolio-image"
            />
            <div className="project-info">
              <h3>LinkedIn Networking Email Generator</h3>
              <p>Boston, MA (August 2024 - February 2024)</p>
              <p>Designed a Python-based tool leveraging a LinkedIn-API library to generate personalized networking emails.</p>
              <a href="https://github.com/ajugulum123/LinkedInEmailGeneration" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project">
            <img
              src="https://media.wired.com/photos/5927001eaf95806129f51539/master/w_2560%2Cc_limit/spotify-logo-zoom-s.jpg"
              alt="Spotify Recommendation System"
              className="portfolio-image"
            />
            <div className="project-info">
              <h3>Spotify Song Recommendation System/Dashboard</h3>
              <p>Boston, MA (December 2023 - January 2024)</p>
              <p>Developed a Spotify Song Recommendation system taking training DataFrame of 10 variables.</p>
              <a href="https://github.com/ajugulum123/Spotify-Recommendation-Model" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p>Want to work together?</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name..." value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email..." value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter message..." value={formData.message} onChange={handleChange} required />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default App;
