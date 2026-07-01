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

  // 🔊 Sounds
  const typingAudio = useRef(new Audio("/music/type.mp3"));
  const bootAudio = useRef(new Audio("/music/boot.mp3"));

  // Typing Effect
  useEffect(() => {
    if (currentLine >= bootLines.length) return;

    let char = 0;

    const typing = setInterval(() => {

      // Play typing sound
      typingAudio.current.currentTime = 0;
      typingAudio.current.volume = 0.2;
      typingAudio.current.play().catch(() => {});

      setTypedText(bootLines[currentLine].slice(0, char));

      char++;

      if (char > bootLines[currentLine].length) {
        clearInterval(typing);

        setFinishedLines((prev) => [
          ...prev,
          bootLines[currentLine],
        ]);

        setTypedText("");

        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 250);
      }
    }, 30);

    return () => clearInterval(typing);
  }, [currentLine]);



  // Loading
  useEffect(() => {
    if (currentLine !== bootLines.length) return;

    // Boot sound
    bootAudio.current.volume = 0.4;
    bootAudio.current.play().catch(() => {});

    let value = 0;

    const timer = setInterval(() => {
      value++;

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        // JARVIS Voice
        const jarvis = new SpeechSynthesisUtterance(
          "welcome and thank you to visit ower portfolio."
        );

        jarvis.rate = 0.9;
        jarvis.pitch = 0.8;
        jarvis.volume = 1;

        speechSynthesis.speak(jarvis);

        setTimeout(() => {
          onComplete();
        }, 2500);
      }
    }, 30);

    return () => {

clearInterval(timer);

bootAudio.current.pause();
bootAudio.current.currentTime = 0;

typingAudio.current.pause();
typingAudio.current.currentTime = 0;

speechSynthesis.cancel();

};
  }, [currentLine, onComplete]);

  return (
    <div className="boot">

      <div className="terminal-window">

        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

          <span className="terminal-title">
            rishabh@portfolio:~
          </span>
        </div>

        <div className="terminal-body">

          {finishedLines.map((line, index) => (
            <div className="terminal-line" key={index}>
              <span className="prompt">
                rishabh@portfolio:~$
              </span>

              <span className="command">
                {line}
              </span>

              <span className="success">
                ✓
              </span>
            </div>
          ))}

          {currentLine < bootLines.length && (
            <div className="terminal-line">

              <span className="prompt">
                rishabh@portfolio:~$
              </span>

              <span className="command">
                {typedText}
              </span>

              <span className="cursor">
                █
              </span>

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
            }}
          >
            🚀
          </div>

          <div className="loading-bar">
            <div
              className="loading-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="percent">
            {progress}%
          </div>

        </div>

      )}

    </div>
  );
}