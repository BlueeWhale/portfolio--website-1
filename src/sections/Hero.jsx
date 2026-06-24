import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SkillPlanet from "../components/SkillPlanet";
import ProfilePlanet from "../components/ProfilePlanet";
import OrbitingPlanet from "../components/OrbitingPlanet";

function Hero() {
  return (
    <section className="hero">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={3} />

        {/* Space Background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Center Profile Planet */}
        <ProfilePlanet />

        {/* Glow Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.6, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="cyan"
            emissive="cyan"
            emissiveIntensity={2}
          />
        </mesh>

        {/* React */}
      <SkillPlanet
  radius={5}
  speed={1}
  texturePath="/assets/react.png"
  name="React"
/>

<SkillPlanet
  radius={7}
  speed={0.7}
  texturePath="/assets/python.png"
  name="Python"
/>

        {/* Java */}
<SkillPlanet
  radius={9}
  speed={0.5}
  texturePath="/assets/java.png"
  name="Java"
/>

        {/* SQL */}
<SkillPlanet
  radius={11}
  speed={0.3}
  texturePath="/assets/SQL.png"
  name="SQL"
/>

        {/* C++ */}
        <SkillPlanet
  radius={10}
  speed={0.6}
  texturePath="/assets/C++.png"
  name="C++"
/>
      {/* Ruby */}
      <SkillPlanet
  radius={5}
  speed={0.9}
  texturePath="/assets/ruby.png"
  name="Ruby"
/>
      {/* vite */}
      <SkillPlanet
  radius={12}
  speed={0.1}
  texturePath="/assets/vite.png"
  name="viteReact"
/>

    {/* nodeJs */}
    <SkillPlanet
  radius={4}
  speed={0.7}
  texturePath="/assets/node.png"
  name="NodeJS"
/>

    {/* JavaScript */}
    <SkillPlanet
  radius={13}
  speed={1.1}
  texturePath="/assets/js.png"
  name="JavaScript"
/>

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Name */}
      <div className="profile-name">
        <h1>Rishab Kumar</h1>
        <p>Full Stack Developer and AI Enthusiast</p>
      </div>
    </section>
  );
}

export default Hero;