import { useEffect, useState, useRef } from "react";

const bootLines = [
  "sudo boot portfolio-os",
  "Initializing Portfolio OS...",
  "Loading React Engine...",
  "Loading Three.js Renderer...",
  "Connecting GitHub...",
  "Connecting LinkedIn...",
  "Loading AI Modules...",
  "Loading Skills Database...",
  "Loading Project Satellites...",
  "Loading Education Records...",
  "Launching JARVIS...",
  "Checking Security...",
  "Access Granted ",
];

export default function BootScreen({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [finishedLines, setFinishedLines] = useState([]);
  const [progress, setProgress] = useState(0);

  // 🔊 Sounds refs
  const typingAudio = useRef(null);
  const bootAudio = useRef(null);

  // Initialize Audio safely on mount
  useEffect(() => {
    typingAudio.current = new Audio("/music/type.mp3");
    bootAudio.current = new Audio("/music/boot.mp3");

    return () => {
      if (typingAudio.current) {
        typingAudio.current.pause();
        typingAudio.current = null;
      }
      if (bootAudio.current) {
        bootAudio.current.pause();
        bootAudio.current = null;
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  // Typing Effect
  useEffect(() => {
    if (currentLine >= bootLines.length) return;

    let char = 0;
    const currentFullText = bootLines[currentLine];

    const typing = setInterval(() => {
      // Play typing sound with error catch for browser autoplay policies
      if (typingAudio.current) {
        typingAudio.current.currentTime = 0;
        typingAudio.current.volume = 0.2;
        typingAudio.current.play().catch(() => {});
      }

      setTypedText(currentFullText.slice(0, char + 1));
      char++;

      if (char >= currentFullText.length) {
        clearInterval(typing);

        setFinishedLines((prev) => [...prev, currentFullText]);
        setTypedText("");

        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 250);
      }
    }, 30);

    return () => clearInterval(typing);
  }, [currentLine]);

  // Loading & JARVIS Effect
  useEffect(() => {
    if (currentLine !== bootLines.length) return;

    // Boot sound
    if (bootAudio.current) {
      bootAudio.current.volume = 0.4;
      bootAudio.current.play().catch(() => {});
    }

    let value = 0;

    const timer = setInterval(() => {
      value++;
      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        // JARVIS Voice (Spelling fixed to "our" so text-to-speech sounds correct)
        const jarvis = new SpeechSynthesisUtterance(
          "Welcome and thank you for visiting our portfolio."
        );

        jarvis.rate = 0.9;
        jarvis.pitch = 0.8;
        jarvis.volume = 1;

        window.speechSynthesis.speak(jarvis);

        setTimeout(() => {
          if (onComplete) onComplete();
        }, 2500);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [currentLine, onComplete]);

  return (
    <div className="boot">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">rishabh@portfolio:~</span>
        </div>

        <div className="terminal-body">
          {finishedLines.map((line, index) => (
            <div className="terminal-line" key={index}>
              <span className="prompt">rishabh@portfolio:~$</span>
              <span className="command">{line}</span>
              <span className="success">✓</span>
            </div>
          ))}

          {currentLine < bootLines.length && (
            <div className="terminal-line">
              <span className="prompt">rishabh@portfolio:~$</span>
              <span className="command">{typedText}</span>
              <span className="cursor">█</span>
            </div>
          )}
        </div>
      </div>

      {currentLine === bootLines.length && (
        <div className="loading-wrapper">
          <div
            className="rocket"
            style={{
              left: `calc(${progress}% - 20px)`,
              transition: "left 0.03s linear",
            }}
          >
            🚀
          </div>

          <div className="loading-bar">
            <div
              className="loading-fill"
              style={{
                width: `${progress}%`,
                transition: "width 0.03s linear",
              }}
            />
          </div>

          <div className="percent">{progress}%</div>
        </div>
      )}
    </div>
  );
}