"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps.map((step, index) => ({
    num: `0${index + 1}`,
    ...step,
  }));
  return (
    <section
      id="process"
      className="relative bg-warm-black text-white overflow-hidden border-b border-white/5 py-16 md:py-20 lg:py-28"
    >
      <div
        className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Sticky Title Information */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-gold-accent mb-6 block font-body"
            >
              {t.process.label}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-2xl md:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.15] max-w-sm"
            >
              {t.process.title}
            </motion.h2>
          </div>

          {/* Right Column: Timeline Grid */}
          <div className="lg:col-span-8 relative pl-4 md:pl-8">
            {/* Timeline Line */}
            <div className="absolute left-[19px] md:left-[35px] top-6 bottom-6 w-[1px] bg-white/10" />

            <div className="space-y-8 md:space-y-10 lg:space-y-14">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[19px] md:left-[35px] top-[24px] w-2.5 h-2.5 bg-gold-accent border border-warm-black rounded-none transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300" />

                  {/* Step Layout */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Big Serif Number */}
                    <div className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white/10 leading-none select-none md:-mt-2 w-20">
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-body font-bold uppercase tracking-wider text-white mb-3 group-hover:text-gold-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/60 font-body font-light leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
