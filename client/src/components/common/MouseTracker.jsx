import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const MouseContext = createContext({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

export function MouseProvider({ children }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

  const handleMouseMove = useCallback((e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
      normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
      normalizedY: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <MouseContext.Provider value={mouse}>
      {children}
    </MouseContext.Provider>
  );
}

export const useMouse = () => useContext(MouseContext);
