import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ICONS = [
  { name: 'C', color: '#A8B9CC', devicon: 'devicon-c-plain colored' },
  { name: 'C++', color: '#659AD2', devicon: 'devicon-cplusplus-plain colored' },
  { name: 'Java', color: '#5382A1', devicon: 'devicon-java-plain colored' },
  { name: 'Python', color: '#3776AB', devicon: 'devicon-python-plain colored' },
  { name: 'JavaScript', color: '#F7DF1E', devicon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', color: '#3178C6', devicon: 'devicon-typescript-plain colored' },
  { name: 'HTML', color: '#E34F26', devicon: 'devicon-html5-plain colored' },
  { name: 'CSS', color: '#1572B6', devicon: 'devicon-css3-plain colored' },
  { name: 'Bootstrap', color: '#7952B3', devicon: 'devicon-bootstrap-plain colored' },
  { name: 'Tailwind CSS', color: '#06B6D4', devicon: 'devicon-tailwindcss-plain colored' },
  { name: 'React.js', color: '#61DAFB', devicon: 'devicon-react-original colored' },
  { name: 'Next.js', color: '#FFFFFF', devicon: 'devicon-nextjs-original colored' },
  { name: 'Node.js', color: '#339933', devicon: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', color: '#FFFFFF', devicon: 'devicon-express-original colored' },
  { name: 'MongoDB', color: '#47A248', devicon: 'devicon-mongodb-plain colored' },
  { name: 'MySQL', color: '#4479A1', devicon: 'devicon-mysql-plain colored' },
  { name: 'Git', color: '#F05032', devicon: 'devicon-git-plain colored' },
  { name: 'GitHub', color: '#FFFFFF', devicon: 'devicon-github-original colored' },
  { name: 'VS Code', color: '#007ACC', devicon: 'devicon-vscode-plain colored' },
  { name: 'Postman', color: '#FF6C37', devicon: 'devicon-postman-plain colored' },
  { name: 'Socket.IO', color: '#FFFFFF', devicon: 'devicon-socketio-original colored' },
  { name: 'JWT', color: '#D6336C', devicon: null },
  { name: 'Firebase', color: '#FFCA28', devicon: 'devicon-firebase-plain colored' },
  { name: 'Razorpay', color: '#3395FF', devicon: null },
  { name: 'Vite', color: '#646CFF', devicon: 'devicon-vitejs-plain colored' },
  { name: 'Scikit-learn', color: '#F7931E', devicon: 'devicon-scikitlearn-plain colored' },
  { name: 'Pandas', color: '#E70488', devicon: 'devicon-pandas-original colored' },
  { name: 'NumPy', color: '#4DABCF', devicon: 'devicon-numpy-original colored' },
  { name: 'Matplotlib', color: '#FFFFFF', devicon: null },
  { name: 'FAISS', color: '#3b82f6', devicon: null },
  { name: 'RAG', color: '#22d3ee', devicon: null },
  { name: 'RL', color: '#10b981', devicon: null },
  { name: 'Ubuntu', color: '#E95420', devicon: 'devicon-ubuntu-plain colored' },
  { name: 'Docker', color: '#2496ED', devicon: 'devicon-docker-plain colored' }
];

export default function OrbitingIcons({ radius = 5.5 }) {
  const groupRef = useRef();

  // Distribute icons evenly around a sphere using Fibonacci sphere algorithm
  const positions = useMemo(() => {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    
    for (let i = 0; i < ICONS.length; i++) {
      const y = 1 - (i / (ICONS.length - 1)) * 2; // y goes from 1 to -1
      const r = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;
      
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }
    return points;
  }, [radius]);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Core */}
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.8} />
      </Sphere>
      
      <Sphere args={[1.4, 16, 16]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Orbiting Icons */}
      <group ref={groupRef}>
        {ICONS.map((icon, i) => (
          <group key={icon.name} position={positions[i]}>
            <Html center transform sprite scale={0.6}>
              <div 
                className="glass-card hover:scale-110 transition-transform duration-300 px-3 py-1.5 rounded-lg flex items-center justify-center font-display font-bold text-[0.65rem] tracking-wider cursor-pointer whitespace-nowrap"
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: `1px solid ${icon.color === '#000000' || icon.color === '#010101' ? '#444' : icon.color}60`,
                  color: icon.color === '#000000' || icon.color === '#010101' ? '#fff' : icon.color,
                  textShadow: `0 0 8px ${icon.color === '#000000' ? '#fff' : icon.color}60`,
                  boxShadow: `0 0 15px ${icon.color === '#000000' ? '#fff' : icon.color}20`
                }}
              >
                {icon.name}
              </div>
            </Html>
          </group>
        ))}
      </group>
    </group>
  );
}
