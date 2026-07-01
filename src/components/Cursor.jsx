import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src="/images/rocket-curser.png"
      className="rocket-cursor"
      style={{
        transform: `translate(${pos.x}px,${pos.y}px) rotate(-90deg)`,
      }}
      draggable={false}
      alt=""
    />
  );
}