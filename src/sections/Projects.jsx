import { useState } from "react";

import wakexImg from "../assets/projects/wakex.png"; 
import smsImg from "../assets/projects/sms.png";
import gameImg from "../assets/projects/game.png";
import vision from "../assets/projects/visionDesk.png";
import ccai from "../assets/projects/ccai.png";
import bwe from "../assets/projects/bwe.png";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiOpencv,
  SiMediapipe,
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiReact,
  SiRuby,
  SiPycharm
} from "react-icons/si";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Vision Desk",
      desc: "AI + Computer Vision based smart desktop system using hand gestures and automation.",
      image: vision,
      techIcons: [
        <FaPython key="py" />,
        <SiOpencv key="cv" />,
        <SiMediapipe key="mp" />,
        <SiPycharm key="pc" />,
      ],
      github: "https://github.com/BlueeWhale/VisionDesk.git",
      demo: "https://github.com/BlueeWhale/VisionDesk.git",
      video: "https://www.youtube.com/embed/_8I3Ul4ICzY",
    },
    {
      title: "Student Management System",
      desc: "Ruby based CLI Student Management System with CRUD operations.",
      image: smsImg,
      techIcons: [<SiRuby key="rb" />],
      github: "https://github.com/BlueeWhale/Student-Mangement-System.git",
      demo: "https://github.com/BlueeWhale/Student-Mangement-System.git",
      video: null,
    },
    {
      title: "AI Tic Tac Toe",
      desc: "Tic Tac Toe game with Minimax AI Algorithm.",
      image: gameImg,
      techIcons: [
        <FaPython key="py" />,
        <SiPycharm key="pc" />,
        <FaHtml5 key="h5" />,
        <FaCss3Alt key="c3" />,
        <FaJs key="js" />,
        <FaBootstrap key="bs" />,
      ],
      github: "#",
      demo: null,
      video: null,
    },
    {
      title: "Campus Connect AI",
      desc: "Smart campus management platform with AI features.",
      image: ccai,
      techIcons: [
        <FaNodeJs key="node" />,
        <FaPython key="py" />,
        <SiExpress key="exp" />,
        <SiBootstrap key="bs" />,
        <FaHtml5 key="h5" />,
        <FaCss3Alt key="c3" />,
        <FaJs key="js" />,
        <SiMongodb key="mg" />,
      ],
      github: "https://github.com/BlueeWhale/CampusConnect-AI.git",
      demo: "https://github.com/BlueeWhale/CampusConnect-AI.git",
      video: "https://www.youtube.com/embed/q_txNnkN0WY",
    },
    {
      title: "WakeX AI",
      image: wakexImg, 
      desc: "AI productivity assistant powered by Computer Vision.",
      techIcons: [
        <FaPython key="py" />,
        <SiMediapipe key="mp" />,
        <SiOpencv key="cv" />,
        <SiPycharm key="pc" />,
      ],
      github: "https://github.com/BlueeWhale/WakeX-AI.git",
      demo: "https://github.com/BlueeWhale/WakeX-AI.git",
      video: null,
    },
    {
      title: "BlueWhale Estate",
      image: bwe, 
      desc: "BlueWhale Estate onw step to word real estate.",
      techIcons: [
        <SiReact key="rc" />
      ],
      github: "https://github.com/BlueeWhale/BlueWhale-Estate.git",
      demo: "https://blue-whale-estate.vercel.app/",
      video: null,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">🛰️ Project Satellites</h1>

      {/* 🎠 Carousel Wrapper */}
      <div className="carousel-wrapper">
        <button className="nav-btn prev-btn" onClick={handlePrev}>❮</button>
        
        <div className="carousel-container">
          {projects.map((project, index) => {
            // यहाँ तय हो रहा है कि कार्ड active है, left में है या right में
            let position = "next-slide"; // default fallback
            
            if (index === activeIndex) {
              position = "active-slide";
            } else if (
              index === activeIndex - 1 || 
              (activeIndex === 0 && index === projects.length - 1)
            ) {
              position = "prev-slide";
            } else if (
              index === activeIndex + 1 || 
              (activeIndex === projects.length - 1 && index === 0)
            ) {
              position = "next-slide";
            } else {
              // जो बहुत दूर हैं उन्हें छुपाने के लिए (Optional, Clean look के लिए)
              position = "hidden-slide"; 
            }

            return (
              <div
                key={index}
                className={`project-card ${position}`}
                onClick={() => {
                  if (index === activeIndex) {
                    setSelectedProject(project); // सिर्फ एक्टिव कार्ड क्लिक पर modal खुलेगा
                  } else {
                    setActiveIndex(index); // साइड वाले कार्ड पर क्लिक करने पर वो बीच में आ जायेगा
                  }
                }}
              >
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}

                <h2>{project.title}</h2>
                <p>{project.desc}</p>

                <div className="tech-icons">
                  {project.techIcons.map((icon, idx) => (
                    <span key={idx} className="tech-icon">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <button className="nav-btn next-btn" onClick={handleNext}>❯</button>
      </div>

      {/* 📄 Modal Section (यह पहले जैसा ही है) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✖</button>

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.desc}</p>

            <div className="tech-icons">
              {selectedProject.techIcons.map((icon, idx) => (
                <span key={idx} className="tech-icon">{icon}</span>
              ))}
            </div>

            {selectedProject.video ? (
              <div className="video-wrapper">
                <iframe
                  className="youtube-video"
                  src={selectedProject.video}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : selectedProject.image ? (
              <div className="modal-image-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-image" />
              </div>
            ) : (
              <div className="no-video">🚫 No Preview Available</div>
            )}

            <div className="project-buttons">
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="project-btn github-btn">
                GitHub 🚀
              </a>
              {selectedProject.demo ? (
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="project-btn demo-btn">
                  Live Demo 🌐
                </a>
              ) : (
                <button disabled className="project-btn disabled-btn">No Live Demo</button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;