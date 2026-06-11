"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section 
      id="about" 
      className="relative bg-bg-beige text-warm-black flex flex-col justify-center py-16 md:py-24 lg:py-0 lg:min-h-screen overflow-hidden"
    >
      <div 
        className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        {/* Label Above the Grid for perfect alignment */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-gold-accent mb-6 md:mb-8 block font-body"
        >
          {t.about.label}
        </motion.span>

        {/* Strict Grid Layout: Left Heading, Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Heading */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-warm-black leading-[1.15] max-w-xl"
            >
              {t.about.title}
            </motion.h2>
          </div>
          
          {/* Right Side: Description Texts */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-base md:text-lg lg:text-xl text-text-gray font-light leading-relaxed"
            >
              {t.about.desc_1}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-base md:text-lg lg:text-xl text-text-gray font-light leading-relaxed"
            >
              {t.about.desc_2}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
