import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ScrollRig() {
  const [scrollY, setScrollY] = useState(0);
  const targetPos = useRef(new THREE.Vector3(0, 0, 8));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll percentage (0 to 1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollY(scrollRatio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    // Determine target camera position based on scroll
    // Start at (0, 0, 8). As we scroll down, we dive forward and slightly down.
    const zOffset = 8 - (scrollY * 4); // Move from 8 to 4
    const yOffset = -scrollY * 2;      // Move from 0 to -2

    targetPos.current.set(0, yOffset, zOffset);
    
    // Smoothly interpolate camera position
    state.camera.position.lerp(targetPos.current, 0.05);
    
    // Smoothly interpolate camera rotation by forcing it to look at a point that moves slightly
    targetLook.current.set(0, yOffset - 0.5, 0);
    
    // Create a temporary quaternion to slerp towards
    const dummy = new THREE.Object3D();
    dummy.position.copy(state.camera.position);
    dummy.lookAt(targetLook.current);
    
    state.camera.quaternion.slerp(dummy.quaternion, 0.05);
  });

  return null;
}
