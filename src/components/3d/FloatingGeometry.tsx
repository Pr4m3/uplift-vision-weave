import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  geometry: "box" | "sphere" | "torus" | "octahedron";
}

const FloatingGeometry = ({ position, color, geometry }: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.7, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.7, 0.3, 16, 100]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.8]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export default FloatingGeometry;
