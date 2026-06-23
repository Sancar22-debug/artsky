"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info } from "lucide-react";
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
  video?: string;
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
  const [showMobileInfo, setShowMobileInfo] = useState(false);

  // Keep a local copy of the project data so it remains visible during the exit animation
  useEffect(() => {
    if (project) {
      setLocalProject(project);
      setShowMobileInfo(false);
    }
  }, [project]);

  // Lock body scroll and flag modal open (for hiding WhatsApp etc.)
  useEffect(() => {
    if (isOpen || fullScreenImage) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen, fullScreenImage]);

  // Close info panel on ESC
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && showMobileInfo) {
      setShowMobileInfo(false);
    }
  }, [showMobileInfo]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const images = localProject?.images || [];

  const renderSpecItem = (label: string, value: string | undefined) => {
    if (!value || value === "—" || value === "-") return null;
    return (
      <div className="flex justify-between items-baseline py-3 border-b border-white/5 project-details-spec-item">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 font-body shrink-0">
          {label}
        </span>
        <span className="text-xs md:text-sm font-light text-white text-right pl-4 leading-normal max-w-[200px]">
          {value}
        </span>
      </div>
    );
  };

  const renderInfoContent = () => {
    if (!localProject) return null;
    return (
      <>
        {/* Category Tags */}
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.35em] uppercase text-white/50 mb-4 font-body block project-details-tags">
          {localProject.tags.join(" / ")}
        </span>

        {/* Title */}
        <h1 className="font-heading text-2xl md:text-3xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-3 leading-none project-details-title break-words hyphens-auto">
          {localProject.title}
        </h1>

        {/* Vertical Divider */}
        <div className="w-12 h-[1px] bg-white/40 mb-6 project-details-divider" />

        {/* Detailed Description */}
        <p className="font-body text-xs lg:text-sm text-white/85 font-light leading-relaxed mb-0 max-w-md project-details-description">
          {localProject.longDescription || localProject.description}
        </p>

        {/* Technical Specs List */}
        {localProject.details && (
          <div className="border-t border-white/10 pt-4 mt-6 space-y-0 max-w-md project-details-specs">
            {renderSpecItem(t.projects.specs.location, localProject.details.location)}
            {renderSpecItem(t.projects.specs.type, localProject.details.type)}
            {renderSpecItem(t.projects.specs.area, localProject.details.area)}
            {renderSpecItem(t.projects.specs.scope, localProject.details.scope)}
            {renderSpecItem(t.projects.specs.year, localProject.details.year)}
          </div>
        )}
      </>
    );
  };

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
          {/* ===== MOBILE LAYOUT (< lg) ===== */}
          <div className="w-full h-full flex flex-col lg:hidden relative">
            {/* Close Button - top right */}
            <button
              onClick={onClose}
              className="fixed top-4 right-4 z-[55] p-2.5 bg-black/40 hover:bg-white hover:text-warm-black text-white rounded-full border border-white/10 transition-all duration-300 backdrop-blur-md group cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* Info Button - top left */}
            <button
              onClick={() => setShowMobileInfo(!showMobileInfo)}
              className={`fixed top-4 left-4 z-[55] p-2.5 rounded-full border transition-all duration-300 backdrop-blur-md group cursor-pointer ${
                showMobileInfo 
                  ? "bg-white text-warm-black border-white" 
                  : "bg-black/40 text-white border-white/10 hover:bg-white/10"
              }`}
              aria-label="Toggle project info"
            >
              <Info className="w-5 h-5" />
            </button>

            {/* Scrollable Image Gallery */}
            <div className="w-full h-full overflow-y-auto pt-16 pb-8 px-3">
              <div className="flex flex-col gap-3">
                {/* Video player if available */}
                {localProject?.video && (
                  <div className="relative w-full aspect-video shrink-0 bg-black/50 overflow-hidden">
                    <video
                      src={localProject.video}
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                      preload="metadata"
                    />
                  </div>
                )}
                {images.length > 0 ? (
                  images.map((imgSrc, index) => (
                    <div
                      key={imgSrc}
                      className="relative w-full aspect-[16/10] shrink-0 bg-black/50 overflow-hidden"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${localProject.title} - ${index + 1}`}
                        fill
                        sizes="100vw"
                        unoptimized
                        className="object-contain"
                        priority={index < 2}
                        loading={index < 2 ? undefined : "lazy"}
                      />
                      {/* Image counter */}
                      <div className="absolute bottom-3 right-3 z-40 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white/60 text-[10px] tracking-wider font-body">
                        {index + 1} / {images.length}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full h-64 flex items-center justify-center text-white/30">
                    {t.projects.modal_empty}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Info Panel - slides in from left */}
            <AnimatePresence>
              {showMobileInfo && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[56] bg-black/50"
                    onClick={() => setShowMobileInfo(false)}
                  />
                  {/* Info panel */}
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-0 left-0 bottom-0 z-[57] w-[85vw] max-w-[360px] bg-warm-black/95 backdrop-blur-xl border-r border-white/10 overflow-y-auto"
                  >
                    <div className="p-6 pt-20">
                      {renderInfoContent()}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* ===== DESKTOP LAYOUT (>= lg) ===== */}
          <div className="w-full h-screen hidden lg:flex flex-row relative overflow-hidden">
            
            {/* Close Button - Pinned to the top-right of the screen and never scrolls */}
            <button
              onClick={onClose}
              className="fixed top-8 right-8 z-50 p-3 bg-white/5 hover:bg-white hover:text-warm-black text-white rounded-none border border-white/10 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* Left Column: Image Gallery (75% width on desktop, scrolls independently) */}
            <div className="w-[75%] h-full overflow-y-auto flex flex-col gap-6 p-12 pb-16 bg-warm-black scrollbar-thin">
              {/* Video player if available */}
              {localProject?.video && (
                <div className="relative w-full aspect-video shrink-0 overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl">
                  <video
                    src={localProject.video}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                    preload="metadata"
                  />
                </div>
              )}
              {images.length > 0 ? (
                images.map((imgSrc, index) => (
                  <div
                    key={imgSrc}
                    onClick={() => setFullScreenImage(imgSrc)}
                    className="relative w-full aspect-[16/10] shrink-0 overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl cursor-pointer group"
                  >
                    <Image
                      src={imgSrc}
                      alt={`${localProject.title} - Render ${index + 1}`}
                      fill
                      sizes="75vw"
                      unoptimized
                      className="object-contain transition-transform duration-700 hover:scale-[1.02]"
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                    />
                    {/* Expand hint icon on hover */}
                    <div className="absolute top-4 right-4 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full aspect-[16/10] bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/30">
                  {t.projects.modal_empty}
                </div>
              )}
            </div>

            {/* Right Column: Sticky Project Details */}
            <div className="w-[25%] h-full flex flex-col justify-center border-l border-white/10 bg-warm-black text-white project-details-panel">
              <div className="flex flex-col project-details-inner p-10">
                {renderInfoContent()}
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
            className="absolute top-8 right-8 z-[70] p-3 bg-white/5 hover:bg-white hover:text-warm-black text-white rounded-none border border-white/10 transition-all duration-300 backdrop-blur-sm group cursor-pointer"
          >
            <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
          </button>
          
          <div className="relative w-full h-full p-4 md:p-12 lg:p-20 flex items-center justify-center">
            <Image
              src={fullScreenImage}
              alt="Fullscreen view"
              fill
              sizes="100vw"
              unoptimized
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
