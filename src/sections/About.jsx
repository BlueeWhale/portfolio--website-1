import { useState, useEffect } from "react";

import profile1 from "../assets/profile.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpeg";
import profile4 from "../assets/profile4.jpeg";
import profile5 from "../assets/profile5.jpeg";
import profile6 from "../assets/profile6.jpeg";
import profile7 from "../assets/profile7.jpeg";

// 1. static array को बाहर रखने से परफॉर्मेंस बेहतर होती है
const IMAGES = [profile1, profile2, profile3, profile4, profile5, profile6, profile7];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="astronaut-card">
        
        <div className="about-left">
          <img
            src={IMAGES[currentImage]}
            alt="Rishabh Kumar"
            className="about-image"
          />
        </div>

        <div className="about-right">
          <h1>👨‍🚀 About Me</h1>

          <h3>Full Stack Developer and AI Enthusiast</h3>

          <p>
            Hi, I'm Rishabh Kumar, a passionate B.Tech student and aspiring Software Developer with a strong interest in Python, Web Development, Artificial Intelligence, and DSA. I enjoy transforming creative ideas into interactive digital experiences, from building AI-powered applications and Python games to developing modern, responsive websites.
          </p>
          
          <p>
            My journey in programming started with curiosity and has evolved into a continuous pursuit of learning and innovation. I have worked on various personal and academic projects. Through these projects, I have developed problem-solving skills, logical thinking, and a deep understanding of software development principles.
          </p>

          <p>
            I am always eager to explore new technologies, improve my skills, and take on challenging projects that help me grow as a developer. My goal is to create impactful solutions that combine creativity, performance, and user experience while continuously learning and contributing to the tech community.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h2>10+</h2>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h2>5+</h2>
              <span>Technologies</span>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <span>Passion</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;