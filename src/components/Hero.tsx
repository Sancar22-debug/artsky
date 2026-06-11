"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
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
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/imgs/herovideo.mp4?v=3" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Dark Overlay (Gradation from top and bottom for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-warm-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center h-full">
        {/* Small Technical Label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-gold-accent mb-5 block"
        >
          {t.hero.subtitle}
        </motion.span>

        {/* Big Bold Architectural Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          {t.hero.title_1} <br className="hidden md:inline" />
          {t.hero.title_2}
        </motion.h1>

        {/* Studio Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-white/70 text-sm md:text-base font-light max-w-2xl mt-6 mb-12 leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto"
          style={{ marginTop: "48px" }}
        >
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center text-[11px] uppercase tracking-[0.2em] font-bold bg-gold-accent border border-gold-accent text-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-none text-center font-body"
            style={{ padding: "14px 38px", display: "inline-flex" }}
          >
            {t.hero.services}
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center text-[11px] uppercase tracking-[0.2em] font-bold border border-white/20 text-white hover:border-white hover:bg-white hover:text-warm-black transition-all duration-300 rounded-none text-center font-body"
            style={{ padding: "14px 38px", display: "inline-flex" }}
          >
            {t.hero.projects}
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[8px] uppercase tracking-[0.3em] text-white/50">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/50 stroke-[1.5]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
