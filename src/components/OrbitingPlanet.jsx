import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function OrbitingPlanet({ radius, speed, color, size }) {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.position.x =
        Math.cos(time * speed) * radius;

      planetRef.current.position.z =
        Math.sin(time * speed) * radius;
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default OrbitingPlanet;