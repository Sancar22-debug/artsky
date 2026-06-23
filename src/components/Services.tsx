"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { useLanguage } from "@/lib/LanguageContext";

const servicesImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
];

export default function Services() {
  const { t } = useLanguage();
  const services = t.services.items.map((item, index) => ({
    ...item,
    image: servicesImages[index],
  }));
  return (
    <section 
      id="services" 
      className="relative bg-warm-black text-white flex flex-col pt-6 lg:pt-16 pb-6 lg:pb-12 overflow-hidden"
    >
      <div 
        className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >


        {/* Title block - centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col items-center lg:items-start max-w-4xl lg:max-w-4xl mx-auto lg:mx-0">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] md:text-[13px] font-bold tracking-[0.35em] uppercase text-white/50 mb-6 block font-body"
          >
            {t.services.label}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl md:text-4xl lg:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.15] max-w-2xl text-center lg:text-left"
          >
            {t.services.title}
          </motion.h2>
        </div>
 
        {/* Spacer between title and grid */}
        <div className="h-6 md:h-10 lg:h-14" />
 
        <motion.div
          initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-12 px-12 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3"
        >
          {services.map((feature, i) => (
            <FeatureCard 
              key={i} 
              feature={feature}
              className="min-w-[80vw] sm:min-w-[45vw] md:min-w-0 snap-center"
            />
          ))}
        </motion.div>
 
        {/* Spacer between grid and button */}
        <div className="h-6 md:h-10 lg:h-14" />
 
        {/* Contact Us CTA Button at the bottom */}
        <div className="flex justify-center">
          <motion.a
            href="#contacts"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold border border-white/25 text-white hover:bg-white hover:text-warm-black hover:border-white transition-all duration-300 font-body rounded-none py-4 px-9"
          >
            {t.services.btn}
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
          </motion.a>
        </div>


      </div>
    </section>
  );
}
