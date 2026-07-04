import React from "react";
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
  SiC,
  SiCplusplus,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";

// Grouping skills into structured categories for better UI layout and organization
const SKILL_CATEGORIES = [
  {
    categoryName: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython />, level: "Advanced" },
      { name: "Java", icon: <FaJava />, level: "Intermediate" },
      { name: "JavaScript", icon: <FaJs />, level: "Advanced" },
      { name: "C", icon: <SiC />, level: "Core" },
      { name: "C++", icon: <SiCplusplus />, level: "DSA" },
      { name: "Ruby", icon: <SiRuby />, level: "Basics" },
    ],
  },
  {
    categoryName: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact />, level: "Advanced" },
      { name: "AngularJS", icon: <FaAngular />, level: "Basic" },
      { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
      { name: "CSS3", icon: <FaCss3Alt />, level: "Expert" },
    ],
  },
  {
    categoryName: "Backend & Databases",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs />, level: "Intermediate" },
      { name: "ExpressJS", icon: <SiExpress />, level: "Intermediate" },
      { name: "DBMS", icon: <FaDatabase />, level: "Core" },
      { name: "SQL / MySQL", icon: <SiMysql />, level: "Queries" },
      { name: "MongoDB", icon: <SiMongodb />, level: "NoSQL" },
    ],
  },
  {
    categoryName: "AI & Development Tools",
    skills: [
      { name: "Machine Learning", icon: <GiArtificialIntelligence />, level: "Enthusiast" },
      { name: "Computer Vision", icon: <SiOpencv />, level: "OpenCV" },
      { name: "VS Code", icon: <VscVscode />, level: "IDE" },
      { name: "PyCharm", icon: <SiPycharm />, level: "IDE" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section">
      {/* Title with your portfolio's cosmic theme */}
      <div className="skills-header">
        <h1 className="skills-title">🌌 Skills Galaxy</h1>
        <p className="skills-subtitle">Mapping my technical expertise across the development universe</p>
      </div>

      {/* Mapping through each distinct technical category */}
      <div className="categories-container">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="skill-category-block">
            <h2 className="category-title">{cat.categoryName}</h2>
            
            {/* Grid structure specifically optimized for the current cluster */}
            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon-wrapper">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    {/* Unique feature: Subtext badge displaying focus/proficiency area */}
                    <span className="skill-level-badge">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;