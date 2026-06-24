import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import cseImg from "../assets/cse.png";
function ProfilePlanet() {
  const texture = useLoader(
    THREE.TextureLoader,
    cseImg
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