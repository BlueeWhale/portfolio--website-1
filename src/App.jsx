import { useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import BootScreen from "./components/BootScreen";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import ResumeButton from "./components/ResumeButton";
import FloatingDock from "./components/FloatingDock";
import MusicToggle from "./components/MusicToggle";
import TechMarquee from "./components/TechMarquee";
import Footer from "./components/Footer";

function App() {
  // Intro Screen
  const [showIntro, setShowIntro] = useState(true);

  // Boot Screen
  const [showBoot, setShowBoot] = useState(false);

  // Music
  const [musicStart, setMusicStart] = useState(false);

  // Theme
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  // Intro First
  if (showIntro) {
    return (
      <Intro
        onComplete={() => {
          setShowIntro(false);
          setShowBoot(true);
        }}
      />
    );
  }

  // Boot Screen Second
  if (showBoot) {
    return (
      <BootScreen
        onComplete={() => {
          setShowBoot(false);
          setMusicStart(true);
        }}
      />
    );
  }

  // Main Portfolio
  return (
    <div className={theme}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <ResumeButton />
      </section>

      <TechMarquee />

      <section id="contact">
        <Contact />
      </section>

      <FloatingDock />

      <Cursor />

      <MusicToggle autoStart={musicStart} />

      <Footer />
    </div>
  );
}

export default App;