import { useState, useEffect, useRef } from "react";
import {
  FaMusic,
  FaVolumeMute,
} from "react-icons/fa";

function MusicToggle() {
  const audioRef = useRef(null);

  const [showVolume, setShowVolume] =
    useState(false);

  const [isPlaying, setIsPlaying] =
    useState(
      localStorage.getItem(
        "musicPlaying"
      ) === "true"
    );

  const [volume, setVolume] =
    useState(
      Number(
        localStorage.getItem(
          "musicVolume"
        )
      ) || 50
    );

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume =
      volume / 100;

    localStorage.setItem(
      "musicVolume",
      volume
    );
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    localStorage.setItem(
      "musicPlaying",
      isPlaying
    );

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="music-controller">
      <audio
        ref={audioRef}
        loop
        src="/music/space.mp3"
      />

      {/* Circle Music Button */}

      <button
        className="music-btn"
        onClick={() =>
          setShowVolume(!showVolume)
        }
      >
        {isPlaying ? (
          <FaMusic />
        ) : (
          <FaVolumeMute />
        )}
      </button>

      {/* Volume Popup */}

      {showVolume && (
        <div className="volume-popup">
          <button
            className="play-btn"
            onClick={() =>
              setIsPlaying(!isPlaying)
            }
          >
            {isPlaying
              ? "⏸ Pause"
              : "▶ Play"}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) =>
              setVolume(
                Number(
                  e.target.value
                )
              )
            }
          />

          <span>
            🔊 {volume}%
          </span>
        </div>
      )}
    </div>
  );
}

export default MusicToggle;