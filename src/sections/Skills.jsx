import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaNodeJs,
  FaAngular,
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
  SiVite,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import {
   VscVscode
} from "react-icons/vsc"

import {
  GiArtificialIntelligence
} from "react-icons/gi"

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "DBMS", icon: <FaDatabase /> },
    { name: "SQL", icon: <SiMysql/>},
    { name: "Mongodb", icon: <SiMongodb/>},
    { name: "NodeJS", icon: <FaNodeJs/>},
    { name: "ExpressJS", icon: <SiExpress/>},
    { name: "AngularJS", icon: <FaAngular/>},
    { name: "ComputerVision", icon: <SiOpencv/>},
    { name: "Visual Studio Code", icon: <VscVscode/>},
    { name: "PyCharm", icon: <SiPycharm/>},
    { name: "Ruby", icon: <SiRuby/>},
    { name: "C", icon: <SiC/>},
    { name: "C++", icon: <SiCplusplus/>},
    { name: "Machine Learning", icon: <GiArtificialIntelligence/>},
   
  ];

  return (
    <section className="skills-section">

      <h1 className="skills-title">
        🌌 Skills Galaxy
      </h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card"
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;