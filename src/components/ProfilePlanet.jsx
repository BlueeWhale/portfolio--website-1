import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function ProfilePlanet() {
  const texture = useLoader(
    THREE.TextureLoader,
    "src/assets/cse.png"
  );

  return (
    <mesh>
      <sphereGeometry args={[2.2, 64, 64]}  />

      <meshStandardMaterial
        map={texture}
      />
    </mesh>
  );
}

export default ProfilePlanet;