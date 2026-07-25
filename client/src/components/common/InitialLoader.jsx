import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for everything to settle before hiding loader
    // In a real app we might tie this to React Three Fiber's useProgress
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds to feel premium and ensure shaders compile

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05080f]"
        >
          {/* Logo Animation */}
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                border: "2px solid rgba(59,130,246,0.2)",
              }}
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                borderTop: "2px solid #60a5fa",
                borderBottom: "2px solid #3b82f6",
                boxShadow: "0 0 20px rgba(96,165,250,0.4)",
              }}
              animate={{ rotate: -360, scale: [1, 0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-display font-black text-2xl text-white">
              SN
            </div>
          </div>
          
          <div className="overflow-hidden h-6">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-display font-bold text-sm tracking-[0.2em] text-blue-400/80 uppercase"
            >
              Initializing Space
            </motion.div>
          </div>
          
          <motion.div 
            className="w-48 h-px bg-white/10 mt-6 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
