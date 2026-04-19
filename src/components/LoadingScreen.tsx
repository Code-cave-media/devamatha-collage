import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8 seconds loading experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#142d4c] text-white overflow-hidden origin-top"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1.2 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blue-400 blur-[120px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo or Icon representing education */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="mb-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center border border-white/20 shadow-lg"
            >
              <img 
                src="/logo.png" 
                alt="Deva Matha College Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Typography */}
            <motion.div 
              className="overflow-hidden mb-2"
              initial={{ opacity: 1 }}
            >
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold font-display tracking-wide text-center text-white"
              >
                DEVA MATHA
              </motion.h1>
            </motion.div>
            
            <motion.div className="overflow-hidden mb-12">
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-lg md:text-xl font-light tracking-[0.3em] text-blue-200 text-center"
              >
                COLLEGE
              </motion.h2>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-6 text-sm text-blue-200/60 tracking-widest uppercase text-center"
            >
              A college that trailblazes with next-gen courses
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
