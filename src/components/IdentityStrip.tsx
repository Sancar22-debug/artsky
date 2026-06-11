"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function IdentityStrip() {
  const { t } = useLanguage();
  const items = t.identity.items;
  return (
    <section className="relative overflow-hidden bg-warm-black text-white border-t border-white/5 min-h-[50vh] flex flex-col justify-center py-16 md:py-24">
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
        className="max-w-[1440px] mx-auto relative z-10 w-full"
        style={{
          paddingLeft: "80px",
          paddingRight: "48px",
        }}
      >
        {/* Main Statement */}
        <div className="max-w-5xl mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-2xl md:text-4xl lg:text-5xl font-extralight leading-relaxed text-white/90"
          >
            {t.identity.statement_1}
            <span className="font-normal text-gold-accent">{t.identity.statement_confident}</span>
            {t.identity.statement_2}
            <span className="font-normal text-white">{t.identity.statement_functional}</span>
            {t.identity.statement_3}
          </motion.p>
        </div>

        {/* Thin Horizontal Line Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8 md:mb-12" />

        {/* 4-Column Technical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-white/10 lg:border-l-0">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 py-8 md:py-10 lg:px-10 border-r border-b border-white/10 lg:border-b-0 flex flex-col justify-between group hover:bg-white/[0.01] transition-colors duration-300"
            >
              {/* Technical index indicator */}
              <span className="text-[12px] font-mono text-white/30 mb-6 block group-hover:text-gold-accent transition-colors duration-300">
                0{index + 1}
              </span>
              
              {/* Item Title */}
              <h3 className="font-body text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-snug">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
