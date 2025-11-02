import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4D9FFF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#A855F7" />
        
        <ParticleField />
        
        <FloatingGeometry position={[-3, 2, -5]} color="#4D9FFF" geometry="box" />
        <FloatingGeometry position={[3, -2, -5]} color="#A855F7" geometry="sphere" />
        <FloatingGeometry position={[0, 3, -8]} color="#FF6B35" geometry="torus" />
        <FloatingGeometry position={[-4, -3, -6]} color="#4D9FFF" geometry="octahedron" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
