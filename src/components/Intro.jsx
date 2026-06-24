import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";
import ParticlesBackground from "./ParticlesBackground";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

function Intro({ onComplete }) {
  const logoRef = useRef();
  const textRef = useRef();
  const iconsRef = useRef();

  useEffect(() => {
  // Continuous 3D rotation
  gsap.to(logoRef.current, {
    rotateY: 360,
    duration: 6,
    repeat: -1,
    ease: "none",
  });

  // Neon pulse
  gsap.to(logoRef.current, {
    scale: 1.08,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // Intro timeline
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(".intro-screen", {
        opacity: 0,
        duration: 1,
        onComplete,
      });
    },
  });

  tl.fromTo(
    logoRef.current,
    {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1.5,
    }
  );
}, [onComplete]);

  return (
    <div className="intro-screen">

  <ParticlesBackground />

  <div className="logo-wrapper">
     <div className="neon-ring"></div>
  <img
    ref={logoRef}
    src={logo}
    alt="Logo"
    className="intro-logo-img"
  />
</div>

  <h1 ref={textRef}>Rishabh Kumar</h1>

<TypeAnimation
  sequence={[
    "> npm install react",
    1500,

    "> Building futuristic experiences...",
    1500,

    "> Full Stack Developer",
    1500,

    "> React • Python • Three.js",
    1500,

    "> Welcome to my galaxy 🚀",
    1500,
  ]}
  wrapper="div"
  speed={50}
  repeat={Infinity}
  className="typing-text"
/>

      <div ref={iconsRef} className="social-icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}

export default Intro;