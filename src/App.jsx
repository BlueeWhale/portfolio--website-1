import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Intro from "./components/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ResumeButton from "./components/ResumeButton";
import MusicToggle from "./components/MusicToggle";
import FloatingDock from "./components/FloatingDock";
import Education from "./sections/Education";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Theme State
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };
  const [musicStart, setMusicStart] =
  useState(false);

  if (showIntro) {
    return (
      <Intro
  onComplete={() => {
    setShowIntro(false);
    setMusicStart(true);
  }}
/>

    );
  }
<MusicToggle autoStart={musicStart} />
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

<section id="contact">
  <Contact />
</section>



<FloatingDock />
<MusicToggle />
<Footer />
    </div>
  );
}

export default App;