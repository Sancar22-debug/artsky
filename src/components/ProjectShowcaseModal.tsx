"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface ProjectDetails {
  location?: string;
  type?: string;
  area?: string;
  scope?: string;
  year?: string;
}

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  details?: ProjectDetails;
  longDescription?: string;
}

interface ProjectShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export default function ProjectShowcaseModal({ isOpen, onClose, project }: ProjectShowcaseModalProps) {
  const { t } = useLanguage();
  const [localProject, setLocalProject] = useState<ProjectData | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  // Keep a local copy of the project data so it remains visible during the exit animation
  useEffect(() => {
    if (project) {
      setLocalProject(project);
    }
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen || fullScreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, fullScreenImage]);

  const images = localProject?.images || [];

  return (
    <AnimatePresence>
      {isOpen && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 overflow-hidden bg-warm-black/98 backdrop-blur-md"
        >
          {/* Main Full-Screen Layout */}
          <div className="w-full h-screen flex flex-col lg:flex-row relative overflow-hidden">
            
            {/* Close Button - Pinned to the top-right of the screen and never scrolls */}
            <button
              onClick={onClose}
              className="fixed top-8 right-8 z-50 p-3 bg-white/5 hover:bg-gold-accent hover:text-warm-black text-white rounded-none border border-white/10 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* Left Column: Image Gallery (65% width on desktop, scrolls independently) */}
            <div className="w-full lg:w-[75%] h-[50vh] lg:h-full overflow-y-auto flex flex-col gap-6 p-6 lg:p-12 pb-16 lg:pb-16 order-2 lg:order-1 bg-warm-black scrollbar-thin">
              {images.length > 0 ? (
                images.map((imgSrc, index) => (
                  <div
                    key={imgSrc}
                    onClick={() => setFullScreenImage(imgSrc)}
                    className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl cursor-pointer"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${localProject.title} - Render ${index + 1}`}
                      fill
                      sizes="(max-w-1024px) 100vw, 65vw"
                      className="object-contain transition-transform duration-700 hover:scale-[1.02]"
                      priority={index === 0} // Load the first image instantly
                      loading={index === 0 ? undefined : "lazy"}
                    />
                  </div>
                ))
              ) : (
                <div className="w-full aspect-[16/10] bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/30">
                  {t.projects.modal_empty}
                </div>
              )}
            </div>

            {/* Right Column: Sticky Project Details */}
            <div className="w-full lg:w-[25%] h-[50vh] lg:h-full flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 order-1 lg:order-2 bg-warm-black text-white project-details-panel">
              
              <div className="flex flex-col project-details-inner p-6 lg:p-10">
                {/* Category Tags */}
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.35em] uppercase text-gold-accent mb-4 font-body block project-details-tags">
                  {localProject.tags.join(" / ")}
                </span>

                {/* Title */}
                <h1 className="font-heading text-2xl md:text-3xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-3 leading-none project-details-title break-words hyphens-auto">
                  {localProject.title}
                </h1>

                {/* Vertical Divider */}
                <div className="w-12 h-[1px] bg-gold-accent mb-6 project-details-divider" />

                {/* Detailed Description */}
                <p className="font-body text-xs lg:text-sm text-white/85 font-light leading-relaxed mb-0 max-w-md project-details-description">
                  {localProject.longDescription || localProject.description}
                </p>

                {/* Technical Specs List */}
                {localProject.details && (
                  <div className="border-t border-white/10 pt-4 mt-6 space-y-0 max-w-md project-details-specs">
                    {localProject.details.location && localProject.details.location !== "—" && localProject.details.location !== "-" && (
                      <div className="flex justify-between items-baseline py-3 border-b border-white/5 project-details-spec-item">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-body shrink-0">
                          {t.projects.specs.location}
                        </span>
                        <span className="text-xs md:text-sm font-light text-white text-right pl-4">
                          {localProject.details.location}
                        </span>
                      </div>
                    )}
                    {localProject.details.type && localProject.details.type !== "—" && localProject.details.type !== "-" && (
                      <div className="flex justify-between items-baseline py-3 border-b border-white/5 project-details-spec-item">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-body shrink-0">
                          {t.projects.specs.type}
                        </span>
                        <span className="text-xs md:text-sm font-light text-white text-right pl-4">
                          {localProject.details.type}
                        </span>
                      </div>
                    )}
                    {localProject.details.area && localProject.details.area !== "—" && localProject.details.area !== "-" && (
                      <div className="flex justify-between items-baseline py-3 border-b border-white/5 project-details-spec-item">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-body shrink-0">
                          {t.projects.specs.area}
                        </span>
                        <span className="text-xs md:text-sm font-light text-white text-right pl-4">
                          {localProject.details.area}
                        </span>
                      </div>
                    )}
                    {localProject.details.scope && localProject.details.scope !== "—" && localProject.details.scope !== "-" && (
                      <div className="flex justify-between items-baseline py-3 border-b border-white/5 project-details-spec-item">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-body shrink-0">
                          {t.projects.specs.scope}
                        </span>
                        <span className="text-xs md:text-sm font-light text-white text-right pl-4 leading-normal max-w-[200px]">
                          {localProject.details.scope}
                        </span>
                      </div>
                    )}
                    {localProject.details.year && localProject.details.year !== "—" && localProject.details.year !== "-" && (
                      <div className="flex justify-between items-baseline py-3 border-b border-white/5 project-details-spec-item">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-body shrink-0">
                          {t.projects.specs.year}
                        </span>
                        <span className="text-xs md:text-sm font-light text-white text-right pl-4">
                          {localProject.details.year}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </motion.div>
      )}
      
      {/* Fullscreen Image Overlay */}
      {fullScreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setFullScreenImage(null)}
        >
          <button
            onClick={() => setFullScreenImage(null)}
            className="absolute top-8 right-8 z-[70] p-3 bg-white/5 hover:bg-gold-accent hover:text-warm-black text-white rounded-none border border-white/10 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
          >
            <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          </button>
          
          <div className="relative w-full h-full p-4 md:p-12 lg:p-20 flex items-center justify-center">
            <Image
              src={fullScreenImage}
              alt="Fullscreen view"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
