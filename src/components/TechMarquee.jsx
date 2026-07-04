import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiThreedotjs,
  SiVite,
  SiGsap,
  SiOpencv,
  SiMediapipe,
  SiBootstrap,
  SiTailwindcss,
  SiAngular,
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";

function TechMarquee() {
  const topRow = [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaJava color="#f89820" />, name: "Java" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
    { icon: <SiExpress color="#ffffff" />, name: "Express" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiMysql color="#00758F" />, name: "MySQL" },
    { icon: <SiVite color="#646CFF" />, name: "Vite" },
    { icon: <SiThreedotjs color="#ffffff" />, name: "Three.js" },
    { icon: <SiGsap color="#88CE02" />, name: "GSAP" },
    { icon: <FaGitAlt color="#F05032" />, name: "Git" },
    { icon: <FaGithub color="#ffffff" />, name: "GitHub" },
  ];

  const bottomRow = [
    { icon: <GiArtificialIntelligence color="#00FFFF" />, name: "AI" },
    { icon: <SiOpencv color="#5C3EE8" />, name: "OpenCV" },
    { icon: <SiMediapipe color="#00C853" />, name: "MediaPipe" },
    { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
    { icon: <SiAngular color="#DD0031" />, name: "Angular" },
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <FaGithub color="#ffffff" />, name: "Portfolio" },
    {
      icon: <GiArtificialIntelligence color="#00FFFF" />,
      name: "Machine Learning",
    },
  ];

  return (
    <section className="tech-marquee-section">

      <div className="marquee">
        <div className="marquee-content right">
          {[...topRow, ...topRow].map((item, index) => (
            <div key={index} className="tag">

              <div className="tag-glow"></div>

              <div className="tag-icon">
                {item.icon}
              </div>

              <div className="tag-text">
                <h3>{item.name}</h3>
                <p>Technology</p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-content left">
          {[...bottomRow, ...bottomRow].map((item, index) => (
            <div key={index} className="tag">

              <div className="tag-glow"></div>

              <div className="tag-icon">
                {item.icon}
              </div>

              <div className="tag-text">
                <h3>{item.name}</h3>
                <p>Technology</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default TechMarquee;