import { useState } from "react";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiOpencv,
  SiMediapipe,
  SiMysql,
  SiPycharm,
  SiRuby,
  SiMongodb,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const projects = [
    {
      title: "Vision Desk",
      desc:
        "AI + Computer Vision based smart desktop system using hand gestures and automation.",

      techIcons: [
        <FaPython />,
        <SiOpencv />,
        <SiMediapipe />,
        <SiPycharm />,
      ],

      github:
        "https://github.com/BlueeWhale/VisionDesk.git",

      demo:
        "https://github.com/BlueeWhale/VisionDesk.git",

      video:
        "https://www.youtube.com/embed/_8I3Ul4ICzY",
    },

    {
      title: "Student Management System",

      desc:
        "Ruby based CLI Student Management System with CRUD operations.",

      techIcons: [<SiRuby />],

      github:
        "https://github.com/BlueeWhale/Student-Mangement-System.git",

      demo:
        "https://github.com/BlueeWhale/Student-Mangement-System.git",

      video: null,
    },

    {
      title: "AI Tic Tac Toe",

      desc:
        "Tic Tac Toe game with Minimax AI Algorithm.",

      techIcons: [
        <FaPython />,
        <SiPycharm />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaJs />,
        <FaBootstrap />,
      ],

      github: "#",

      demo: null,

      video: null,
    },

    {
      title: "Campus Connect AI",

      desc:
        "Smart campus management platform with AI features.",

      techIcons: [
        <FaNodeJs />,
        <FaPython />,
        <SiExpress />,
        <SiBootstrap />,
        <FaHtml5 />,
        <FaCss3Alt />,
        <FaJs />,
        <SiMongodb />,
      ],

      github:
        "https://github.com/BlueeWhale/CampusConnect-AI.git",

      demo:
        "https://github.com/BlueeWhale/CampusConnect-AI.git",

      video:
        "https://www.youtube.com/embed/q_txNnkN0WY",
    },

    {
      title: "WakeX AI",

      desc:
        "AI productivity assistant powered by Computer Vision.",

      techIcons: [
        <FaPython />,
        <SiMediapipe />,
        <SiOpencv />,
        <SiPycharm />,
      ],

      github:
        "https://github.com/BlueeWhale/WakeX-AI.git",

      demo:
        "https://github.com/BlueeWhale/WakeX-AI.git",

      video: null,
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <h1 className="projects-title">
        🛰️ Project Satellites
      </h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() =>
              setSelectedProject(project)
            }
          >
            <div className="satellite-icon">
              🛰️
            </div>

            <h2>{project.title}</h2>

            <p>{project.desc}</p>

            <div className="tech-icons">
              {project.techIcons.map(
                (icon, index) => (
                  <span
                    key={index}
                    className="tech-icon"
                  >
                    {icon}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="project-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="close-btn"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              ✖
            </button>

            <h2>
              {selectedProject.title}
            </h2>

            <p>
              {selectedProject.desc}
            </p>

            <div className="tech-icons">
              {selectedProject.techIcons.map(
                (icon, index) => (
                  <span
                    key={index}
                    className="tech-icon"
                  >
                    {icon}
                  </span>
                )
              )}
            </div>

            {selectedProject.video ? (
  <iframe
    className="youtube-video"
    src={selectedProject.video}
    title={selectedProject.title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
) : (
  <div className="no-video">
    🚫 No Demo Video Available
  </div>
)}

            <div className="project-buttons">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub 🚀
              </a>

              {selectedProject.demo ? (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn demo-btn"
                >
                  Live Demo 🌐
                </a>
              ) : (
                <button
                  disabled
                  className="project-btn disabled-btn"
                >
                  No Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;