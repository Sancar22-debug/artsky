"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Grid, Ruler, Compass, GitCommit, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.header.about, href: "#about", icon: Compass },
    { label: t.header.services, href: "#services", icon: Ruler },
    { label: t.header.projects, href: "#projects", icon: Grid },
    { label: t.header.process, href: "#process", icon: GitCommit },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-bg-beige/95 backdrop-blur-md text-warm-black border-light-stone/50 shadow-sm"
            : "bg-transparent border-white/5 text-white"
        }`}
        style={{
          paddingTop: isScrolled ? "12px" : "24px",
          paddingBottom: isScrolled ? "12px" : "24px",
        }}
      >
        <div 
          className="max-w-[1440px] mx-auto flex items-center justify-between w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
        >
          {/* Logo Container */}
          <a 
            href="#" 
            style={{ 
              position: "relative", 
              height: "40px", 
              width: "53px", 
              display: "flex", 
              alignItems: "center" 
            }}
          >
            {/* White Logo */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/imgs/logowhite.png"
                alt="ArtSky Logo"
                fill
                sizes="53px"
                className="object-contain object-left"
                priority
              />
            </div>
            {/* Dark Logo */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/imgs/logodark.png"
                alt="ArtSky Logo"
                fill
                sizes="53px"
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-body">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center text-[12px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 py-2"
                >
                  <Icon
                    className={`w-4 h-4 stroke-[1.5] transition-colors duration-300 ${
                      isScrolled
                        ? "text-text-gray/70 group-hover:text-gold-accent"
                        : "text-white/60 group-hover:text-gold-accent"
                    }`}
                    style={{ marginRight: "10px" }}
                  />
                  <span
                    className={
                      isScrolled
                        ? "text-warm-black group-hover:text-gold-accent transition-colors duration-300"
                        : "text-white group-hover:text-gold-accent transition-colors duration-300"
                    }
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Action & Lang Group */}
          <div className="hidden md:flex items-center gap-5">
            {/* Contacts / CTA Button */}
            <a
              href="https://wa.me/996553637901"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold border transition-all duration-300 font-body rounded-none ${
                isScrolled
                  ? "border-warm-black/25 text-warm-black hover:bg-warm-black hover:text-white hover:border-warm-black"
                  : "border-white/25 text-white hover:bg-white hover:text-primary-dark hover:border-white"
              }`}
              style={{
                padding: "12px 28px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {t.header.discuss}
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </a>

            {/* Technical grid vertical divider */}
            <div
              className={`w-[1px] h-6 transition-colors duration-300 ${
                isScrolled ? "bg-warm-black/15" : "bg-white/15"
              }`}
            />

            {/* Language Switcher */}
            <div 
              className="flex flex-col text-[10.5px] font-bold tracking-wider leading-none text-left font-body select-none"
              style={{ gap: "4px" }}
            >
              <span
                onClick={() => setLanguage("ru")}
                className={`transition-colors duration-300 cursor-pointer ${
                  language === "ru"
                    ? "text-gold-accent"
                    : isScrolled ? "text-text-gray/40 hover:text-warm-black" : "text-white/40 hover:text-white"
                }`}
              >
                RU
              </span>
              <span
                onClick={() => setLanguage("en")}
                className={`transition-colors duration-300 cursor-pointer ${
                  language === "en"
                    ? "text-gold-accent"
                    : isScrolled ? "text-text-gray/40 hover:text-warm-black" : "text-white/40 hover:text-white"
                }`}
              >
                EN
              </span>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 transition-colors duration-300 hover:text-gold-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-warm-black flex flex-col justify-between p-6 pb-12 md:hidden"
          >
            {/* Header row in mobile menu */}
            <div className="flex items-center justify-between w-full h-[40px]">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  position: "relative", 
                  height: "40px", 
                  width: "53px", 
                  display: "flex", 
                  alignItems: "center" 
                }}
              >
                <Image
                  src="/imgs/logowhite.png"
                  alt="ArtSky Logo"
                  fill
                  sizes="53px"
                  className="object-contain object-left"
                  priority
                />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-gold-accent transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links centered vertically */}
            <div className="flex flex-col gap-6 pt-4 flex-1 justify-center">
              <nav className="flex flex-col gap-8">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center text-xl uppercase tracking-[0.2em] font-heading font-bold text-white hover:text-gold-accent transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-gold-accent/80" style={{ marginRight: "14px" }} />
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom block for WhatsApp CTA and language selection */}
            <div className="flex flex-col gap-6 mt-auto">
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex items-center justify-between">
                <a
                  href="https://wa.me/996553637901"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-4 border border-white/20 text-white hover:bg-white hover:text-primary-dark transition-all duration-300 font-body rounded-none text-center flex-1 mr-6"
                >
                  {t.header.discuss}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Mobile Lang Stack */}
                <div className="flex flex-col text-[10.5px] font-bold tracking-wider leading-none text-left font-body border-l border-white/10 pl-6" style={{ gap: "8px" }}>
                  <span 
                    onClick={() => { setLanguage("ru"); setMobileMenuOpen(false); }}
                    className={`cursor-pointer transition-colors duration-300 ${language === "ru" ? "text-gold-accent" : "text-white/40"}`}
                  >
                    RU
                  </span>
                  <span 
                    onClick={() => { setLanguage("en"); setMobileMenuOpen(false); }}
                    className={`cursor-pointer transition-colors duration-300 ${language === "en" ? "text-gold-accent" : "text-white/40"}`}
                  >
                    EN
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
