import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

function GlowMesh({ scale = 2.2, speed = 0.4, distort = 0.3, color = '#3b82f6' }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.rotation.z = Math.cos(t * 0.1) * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = Math.sin(t * 0.15) * 0.3;
      wireRef.current.rotation.y = t * 0.08;
      wireRef.current.rotation.z = Math.cos(t * 0.1) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <group>
        {/* Solid inner mesh with distortion */}
        <Icosahedron ref={meshRef} args={[scale, 4]} >
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.3}
            distort={distort}
            speed={speed}
            roughness={0.2}
          />
        </Icosahedron>

        {/* Wireframe outer mesh */}
        <Icosahedron ref={wireRef} args={[scale * 1.02, 4]} >
          <meshBasicMaterial
            color="#60a5fa"
            wireframe
            transparent
            opacity={0.4}
          />
        </Icosahedron>

        {/* Core glow sphere */}
        <mesh>
          <sphereGeometry args={[scale * 0.5, 32, 32]} />
          <meshBasicMaterial
            color="#2563eb"
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitRing({ radius, tilt, speed, color }) {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += speed * 0.02;
    }
  });

  const geometry = new THREE.TorusGeometry(radius, 0.015, 16, 100);
  
  return (
    <group ref={ringRef} rotation={[tilt, 0, 0]}>
      <line geometry={geometry}>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </line>
    </group>
  );
}

export default function FloatingGeometry({ scale = 2.8, position = [3.5, 0, -2] }) {
  return (
    <group position={position}>
      <GlowMesh scale={scale} />
    </group>
  );
}
