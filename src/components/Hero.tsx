"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay blocked or failed, using fallback poster:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary-dark">
      {/* Background Video */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/imgs/projects/erkindik/16.jpg"
          className="object-cover w-full h-full"
        >
          <source src="/imgs/herovideo.mp4?v=3" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Dark Overlay (Gradation from top and bottom for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-warm-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-12 md:px-16 text-center flex flex-col items-center justify-center h-full">
        {/* Small Technical Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-white/50 mb-2 block"
        >
          {t.hero.subtitle}
        </motion.span>

        {/* Big Bold Architectural Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[28px] sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.15] max-w-4xl"
        >
          {t.hero.title_1} <br className="hidden md:inline" />
          {t.hero.title_2}
        </motion.h1>

        {/* Studio Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-white/70 text-xs sm:text-sm md:text-base font-light max-w-2xl mt-6 leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto mt-8 md:mt-12"
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold bg-white border border-white text-warm-black hover:bg-transparent hover:text-white hover:border-white/30 transition-all duration-300 rounded-none text-center font-body py-3 px-6 sm:py-3.5 sm:px-9"
          >
            {t.hero.services}
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold border border-white/20 text-white hover:border-white hover:bg-white hover:text-warm-black transition-all duration-300 rounded-none text-center font-body py-3 px-6 sm:py-3.5 sm:px-9"
          >
            {t.hero.projects}
          </a>
        </motion.div>
      </div>

    </section>
  );
}
