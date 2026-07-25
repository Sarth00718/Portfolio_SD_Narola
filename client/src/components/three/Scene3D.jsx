import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';

export default function Scene3D({
  children,
  className = '',
  style = {},
  camera = { position: [0, 0, 5], fov: 45 },
  gl = { antialias: true, alpha: true, powerPreference: 'high-performance' },
  dpr = [1, 1.5],
  ...props
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0, ...style }}
    >
      <Canvas
        camera={camera}
        gl={gl}
        dpr={dpr}
        style={{ pointerEvents: 'none' }}
        {...props}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#60a5fa" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#22d3ee" />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
