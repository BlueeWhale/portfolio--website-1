import { useEffect, useRef, useState } from "react";
import "./Terminal.css";

const commands = [
  "sudo boot portfolio-os",
  "Initializing Space Portfolio...",
  "Loading React Engine...",
  "Loading Three.js Renderer...",
  "Connecting GitHub...",
  "Connecting LinkedIn...",
  "Loading Skills Database...",
  "Loading AI Modules...",
  "Loading Project Satellites...",
  "Loading Education Records...",
  "Loading Experience...",
  "Launching JARVIS...",
  "Checking Security...",
  "Access Granted ✓",
];

export default function Terminal({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState("");
  const terminalRef = useRef(null);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
      if (lineIndex >= commands.length) {
        setTimeout(() => {
          onComplete && onComplete();
        }, 1200);
        return;
      }

      const line = commands[lineIndex];

      const typing = setInterval(() => {
        charIndex++;

        setCurrent(line.substring(0, charIndex));

        if (charIndex > line.length) {
          clearInterval(typing);

          setLines((prev) => [...prev, line]);

          setCurrent("");

          lineIndex++;
          charIndex = 0;

          setTimeout(typeLine, 250);
        }
      }, 35);
    }

    typeLine();
  }, [onComplete]);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines, current]);

  return (
    <div className="terminal-window">

      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>

        <div className="terminal-title">
          rishabh@portfolio:~
        </div>
      </div>

      <div className="terminal-body" ref={terminalRef}>

        {lines.map((line, i) => (
          <div key={i} className="terminal-line">
            <span className="prompt">
              rishabh@portfolio:~$
            </span>

            <span className="command">
              {line}
            </span>
          </div>
        ))}

        <div className="terminal-line">

          <span className="prompt">
            rishabh@portfolio:~$
          </span>

          <span className="command">
            {current}
          </span>

          <span className="cursor">█</span>

        </div>

      </div>

    </div>
  );
}