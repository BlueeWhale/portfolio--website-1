import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

function SkillPlanet({
  radius,
  speed,
  texturePath,
  name,
}) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  const texture = useLoader(
    THREE.TextureLoader,
    texturePath
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.x =
        Math.cos(t * speed) * radius;

      groupRef.current.position.z =
        Math.sin(t * speed) * radius;

      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Logo Planet */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <planeGeometry args={[1.2, 1.2]} />

        <meshBasicMaterial
          map={texture}
          transparent
        />
      </mesh>

      {/* Skill Name */}
      <Text
        position={[0, 1, 0]}
        fontSize={0.3}
        color={hovered ? "cyan" : "white"}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

export default SkillPlanet;