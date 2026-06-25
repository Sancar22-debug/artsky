"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function YouTubeSection() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-warm-black text-white flex flex-col py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-8"
        >
          <h3 className="font-heading text-2xl md:text-4xl lg:text-[42px] font-medium uppercase tracking-tight text-white leading-[1.15]">
            {t.youtube?.title || "Перейти на youtube канал"}
          </h3>
          <a
            href="https://www.youtube.com/@aiguliskakova7978"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2d3142] hover:bg-[#3a3f55] transition-colors duration-300 rounded-2xl px-8 py-5 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="#FF0000"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="font-body text-white font-bold text-2xl tracking-tight">
              {t.youtube?.button || "YouTube"}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
