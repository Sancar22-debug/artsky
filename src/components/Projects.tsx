"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectShowcaseModal from "@/components/ProjectShowcaseModal";
import { useLanguage } from "@/lib/LanguageContext";

const projectImages: Record<string, string[]> = {
  erkindik: [
    "/imgs/projects/erkindik/16.jpg",
    "/imgs/projects/erkindik/1.jpg",
    "/imgs/projects/erkindik/1 (2).jpg",
    "/imgs/projects/erkindik/1 (3).jpg",
    "/imgs/projects/erkindik/2.jpg",
    "/imgs/projects/erkindik/2 (2).jpg",
    "/imgs/projects/erkindik/3.jpg",
    "/imgs/projects/erkindik/3 (2).jpg",
    "/imgs/projects/erkindik/4.jpg",
    "/imgs/projects/erkindik/5.jpg",
    "/imgs/projects/erkindik/6.jpg",
    "/imgs/projects/erkindik/6 (2).jpg",
    "/imgs/projects/erkindik/7.jpg",
    "/imgs/projects/erkindik/7 (2).jpg",
    "/imgs/projects/erkindik/8.jpg",
    "/imgs/projects/erkindik/8 (2).jpg",
    "/imgs/projects/erkindik/9.jpg",
    "/imgs/projects/erkindik/11.jpg",
    "/imgs/projects/erkindik/13.jpg",
    "/imgs/projects/erkindik/20.jpg",
    "/imgs/projects/erkindik/22.jpg",
    "/imgs/projects/erkindik/23.jpg",
    "/imgs/projects/erkindik/25.jpg",
    "/imgs/projects/erkindik/26.jpg",
    "/imgs/projects/erkindik/28.jpg",
    "/imgs/projects/erkindik/30.jpg",
    "/imgs/projects/erkindik/34.jpg",
    "/imgs/projects/erkindik/35.jpg",
    "/imgs/projects/erkindik/37.jpg",
    "/imgs/projects/erkindik/38.jpg",
    "/imgs/projects/erkindik/42.jpg",
  ],
  prestige: [],
  entre: [],
  hydepark: [],
  alaarcha: []
};

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    tags: string[];
    images?: string[];
    details?: {
      location?: string;
      type?: string;
      area?: string;
      scope?: string;
      year?: string;
    };
    longDescription?: string;
  } | null>(null);

  const projects = [
    {
      id: "erkindik",
      title: t.projects.list.erkindik.title,
      description: t.projects.list.erkindik.description,
      tags: t.projects.list.erkindik.tags,
      colSpan: "lg:col-span-7 h-[350px] md:h-[450px] lg:h-[550px]",
      bg: "bg-[#4a4a4a]",
      image: "/imgs/projects/erkindik/16.jpg",
    },
    {
      id: "prestige",
      title: t.projects.list.prestige.title,
      description: t.projects.list.prestige.description,
      tags: t.projects.list.prestige.tags,
      colSpan: "lg:col-span-5 h-[350px] md:h-[450px] lg:h-[550px]",
      bg: "bg-[#3a3a3a]",
    },
    {
      id: "entre",
      title: t.projects.list.entre.title,
      description: t.projects.list.entre.description,
      tags: t.projects.list.entre.tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#505050]",
    },
    {
      id: "hydepark",
      title: t.projects.list.hydepark.title,
      description: t.projects.list.hydepark.description,
      tags: t.projects.list.hydepark.tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#3e3e3e]",
    },
    {
      id: "alaarcha",
      title: t.projects.list.alaarcha.title,
      description: t.projects.list.alaarcha.description,
      tags: t.projects.list.alaarcha.tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#454545]",
    },
  ];

  const handleProjectClick = (id: string) => {
    const defaultData = projects.find((p) => p.id === id);
    if (!defaultData) return;
    
    const trans = (t.projects.list as Record<string, typeof t.projects.list.erkindik>)[id];

    setSelectedProject({
      title: trans.title,
      description: trans.description,
      tags: [...trans.tags],
      images: projectImages[id] || [],
      details: trans.details,
      longDescription: trans.longDescription || trans.description
    });
  };

  return (
    <section 
      id="projects" 
      className="relative bg-bg-beige text-warm-black flex flex-col overflow-hidden py-10 md:py-16 lg:py-20"
    >
      <div 
        className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        {/* Section Heading — centered on mobile, left on desktop */}
        <div className="flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-gold-accent mb-6 block font-body"
          >
            {t.projects.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-warm-black leading-[1.15] max-w-xl text-center lg:text-left"
          >
            {t.projects.title}
          </motion.h2>
        </div>

        {/* Spacer between heading and grid */}
        <div className="h-6 md:h-10 lg:h-12" />

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-12 gap-4 lg:gap-5 pb-4 snap-x snap-mandatory scrollbar-none -mx-12 px-12 lg:mx-0 lg:px-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`relative overflow-hidden group rounded-none cursor-pointer min-w-[85vw] sm:min-w-[50vw] lg:min-w-0 snap-center w-full lg:w-auto ${project.colSpan}`}
            >
              {/* Card Background Image or Solid Color */}
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-[768px]) 100vw, 50vw"
                    className="object-cover z-0 transition-all duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105 group-hover:brightness-75"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/40 group-hover:to-black/20" />
                </>
              ) : (
                <div className={`absolute inset-0 z-0 ${project.bg} group-hover:brightness-75 transition-all duration-500`} />
              )}

              {/* Text Over Image Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-12 pl-8 sm:pl-20 lg:pl-24">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]">
                  {/* Tags in small uppercase */}
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gold-accent mb-3 block">
                    {project.tags.join(" / ")}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-2 leading-none">
                    {project.title}
                  </h3>

                  {/* Description (Fades in on hover) */}
                  <p className="font-body text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button Spacer — reduced */}
        <div className="h-4 md:h-6" />

        {/* Watch All Projects Button */}
        <div className="flex justify-center">
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold border border-warm-black/25 text-warm-black hover:bg-warm-black hover:text-white hover:border-warm-black transition-all duration-300 font-body rounded-none"
            style={{
              padding: "16px 36px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {t.projects.btn}
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
          </motion.a>
        </div>
      </div>

      <ProjectShowcaseModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
