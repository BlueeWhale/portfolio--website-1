import { useState, useEffect } from "react";

import profile1 from "../assets/profile.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpeg";
import profile4 from "../assets/profile4.jpeg";
import profile5 from "../assets/profile5.jpeg";
import profile6 from "../assets/profile6.jpeg";
import profile7 from "../assets/profile7.jpeg";

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
        
        {/* Left Side: Image with Cyber Premium Layer */}
        <div className="about-left">
          <div className="image-cyber-wrapper">
            <div className="cyber-ring-glow"></div>
            <img
              src={IMAGES[currentImage]}
              alt="Rishabh Kumar"
              className="about-image"
            />
          </div>
        </div>

        {/* Right Side: Structured Intel Sections */}
        <div className="about-right">
          <h1 className="section-title">👨‍🚀 About Me</h1>
          <h3 className="profile-tagline">Full Stack Developer & AI Specialist</h3>

          <div className="intel-grid">
            <div className="intel-block">
              <h4> Who I Am</h4>
              <p>
                Rishabh Kumar — a Computer Science Engineering student obsessed with software architecture, intelligent automations, and building high-performance systems.
              </p>
            </div>

            <div className="intel-block">
              <h4> What I Am Doing</h4>
              <p>
                Developing AI-driven security layers (threat vectors), deploying full-stack ecosystems, optimizing algorithms, and exploring 3D interactive canvases like React Three Fiber.
              </p>
            </div>

            <div className="intel-block">
              <h4> My Cosmic Goal</h4>
              <p>
                To engineer seamless cyber-infrastructures where advanced neural architectures merge flawlessly with scalable web ecosystems to produce next-gen digital paradigms.
              </p>
            </div>
          </div>

          {/* Stats Counters */}
          <div className="about-stats">
            <div className="stat-box">
              <h2>15+</h2>
              <span>Projects Completed</span>
            </div>

            <div className="stat-box">
              <h2>10+</h2>
              <span>Core Tech Vector Stack</span>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <span>Emissive Engine Passion</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;