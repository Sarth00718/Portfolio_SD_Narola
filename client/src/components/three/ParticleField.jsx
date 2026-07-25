import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 350;

export default function ParticleField({ spread = 8, size = 0.015, color = '#60a5fa' }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * spread * 2,
        (Math.random() - 0.5) * spread * 2,
        (Math.random() - 0.5) * spread
      ),
      basePosition: new THREE.Vector3(), // Store for resetting
      speed: 0.1 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
      scale: 0.5 + Math.random() * 1,
      orbitRadius: 0.2 + Math.random() * 0.5,
    }));
  }, [spread]);

  // Initialize base positions once
  useMemo(() => {
    particles.forEach(p => p.basePosition.copy(p.position));
  }, [particles]);

  const { pointer } = useThree();
  const mouseWorld = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Approximate mouse world position based on camera distance
    mouseWorld.set(pointer.x * (spread * 0.8), pointer.y * (spread * 0.8), 0);

    particles.forEach((p, i) => {
      // 1. Calculate natural orbit
      const orbitX = Math.sin(t * p.speed + p.offset) * p.orbitRadius;
      const orbitY = Math.cos(t * p.speed * 0.7 + p.offset) * p.orbitRadius;
      const orbitZ = Math.sin(t * p.speed * 0.5 + p.offset * 2) * p.orbitRadius * 0.5;

      // 2. Mouse Repulsion
      const dx = p.position.x - mouseWorld.x;
      const dy = p.position.y - mouseWorld.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxRepelDist = 3.5;
      
      let repelX = 0;
      let repelY = 0;
      let repelZ = 0;

      if (distance < maxRepelDist) {
        const force = (maxRepelDist - distance) / maxRepelDist; // 0 to 1
        const pushFactor = force * force * 4.0;
        repelX = (dx / distance) * pushFactor;
        repelY = (dy / distance) * pushFactor;
        repelZ = pushFactor * 0.5;
      }

      // 3. Spring back to base position smoothly
      p.position.x += (p.basePosition.x + repelX - p.position.x) * 0.05;
      p.position.y += (p.basePosition.y + repelY - p.position.y) * 0.05;
      p.position.z += (p.basePosition.z + repelZ - p.position.z) * 0.05;

      const x = p.position.x + orbitX;
      const y = p.position.y + orbitY;
      const z = p.position.z + orbitZ;

      dummy.position.set(x, y, z);
      const pulse = 0.6 + Math.sin(t * 2 + p.offset) * 0.4;
      dummy.scale.setScalar(p.scale * pulse);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, PARTICLE_COUNT]}>
      <sphereGeometry args={[size, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </instancedMesh>
  );
}
