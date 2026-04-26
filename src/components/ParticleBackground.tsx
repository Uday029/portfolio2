import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const count = 800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#a855f7" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const ParticleBackground = () => (
  <div className="fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Particles />
    </Canvas>
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
  </div>
);

export default ParticleBackground;
