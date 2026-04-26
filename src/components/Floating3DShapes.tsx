import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed, distort }: { position: [number, number, number]; color: string; speed: number; distort: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.6, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={distort}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const AnimatedTorus = ({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.5, 0.15, 16, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.12} wireframe />
      </mesh>
    </Float>
  );
};

const Floating3DShapes = () => (
  <div className="fixed inset-0 pointer-events-none -z-10">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00f5d4" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#7b61ff" />
      <Suspense fallback={null}>
        <AnimatedSphere position={[-3, 2, -2]} color="#00f5d4" speed={0.5} distort={0.4} />
        <AnimatedSphere position={[3.5, -1.5, -3]} color="#7b61ff" speed={0.3} distort={0.3} />
        <AnimatedTorus position={[2.5, 2.5, -2]} color="#00f5d4" speed={0.4} />
        <AnimatedTorus position={[-2.5, -2, -1.5]} color="#7b61ff" speed={0.6} />
        <AnimatedSphere position={[0, -3, -4]} color="#00d4aa" speed={0.2} distort={0.5} />
      </Suspense>
    </Canvas>
  </div>
);

export default Floating3DShapes;
