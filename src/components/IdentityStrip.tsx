"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function IdentityStrip() {
  const { t } = useLanguage();
  const items = t.identity.items;
  return (
    <section className="relative overflow-hidden bg-warm-black text-white border-t border-white/5 flex flex-col justify-center py-6 md:py-8 lg:py-12">
      {/* Huge Background Watermark Logo */}
      <div className="absolute right-6 top-0 bottom-0 my-auto h-[95%] w-[45vw] max-w-[600px] opacity-[0.025] select-none pointer-events-none">
        <Image
          src="/imgs/logowhite.png"
          alt="ArtSky Watermark Logo"
          fill
          className="object-contain object-right"
        />
      </div>

      <div 
        className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        {/* Main Statement */}
        <div className="max-w-5xl mb-4 md:mb-8 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-lg sm:text-xl md:text-3xl lg:text-4xl font-extralight leading-relaxed text-white/90"
          >
            {t.identity.statement_1}
            <span className="font-normal text-gold-accent">{t.identity.statement_confident}</span>
            {t.identity.statement_2}
            <span className="font-normal text-white">{t.identity.statement_functional}</span>
            {t.identity.statement_3}
          </motion.p>
        </div>

        {/* Thin Horizontal Line Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-4 md:mb-6 lg:mb-8" />

        {/* 4-Column Technical Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-t lg:border-l-0 lg:border-t-0 border-white/10">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="px-2 py-3 sm:px-4 sm:py-4 lg:px-8 lg:py-4 border-r border-b lg:border-b-0 border-white/10 flex flex-col justify-between group hover:bg-white/[0.01] transition-colors duration-300"
            >
              {/* Technical index indicator */}
              <span className="text-[10px] md:text-[11px] lg:text-[12px] font-mono text-white/30 mb-2 lg:mb-4 block group-hover:text-gold-accent transition-colors duration-300">
                0{index + 1}
              </span>
              
              {/* Item Title */}
              <h3 className="font-body text-[10px] sm:text-xs md:text-sm lg:text-[13px] uppercase tracking-[0.15em] lg:tracking-[0.2em] font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
