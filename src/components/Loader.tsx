"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay for a smooth, premium feel transition
      setTimeout(() => setIsLoading(false), 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      
      // Safety timeout: fade out after 1.8 seconds max to ensure user doesn't get stuck
      const safetyTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 1800);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(safetyTimeout);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-warm-black flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Logo container with breathing pulse */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3], 
              scale: [0.95, 1.02, 0.95] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="relative w-24 h-16 mb-24"
          >
            <Image
              src="/imgs/logowhite.png"
              alt="ArtSky Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          
          {/* Elegant minimal loading indicator line */}
          <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gold-accent w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
