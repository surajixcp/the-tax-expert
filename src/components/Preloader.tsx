"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Loader display duration: 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Animated Background Mesh Gradients to match Hero */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, 15, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -right-10 w-[300px] h-[300px] rounded-full bg-secondary/20 blur-[80px] mix-blend-screen"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                x: [0, -20, 0],
                y: [0, 25, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-40 -left-10 w-[250px] h-[250px] rounded-full bg-blue-600/20 blur-[80px] mix-blend-screen"
            ></motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-t-2 border-r-2 border-secondary/50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-l-2 border-b-2 border-blue-500/30"
              />
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-secondary to-red-800 flex items-center justify-center text-white font-black text-4xl shadow-[0_0_40px_rgba(183,16,42,0.6)]">
                T
              </div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase font-['Manrope'] flex items-center gap-2 mb-4"
            >
              The TAX <span className="text-secondary drop-shadow-[0_0_8px_rgba(183,16,42,0.5)]">expertt</span>
            </motion.div>
            
            {/* Loading Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-48 h-1 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-secondary to-red-400 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
