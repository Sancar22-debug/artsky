"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MapPin, Phone, Clock, Send, ExternalLink } from "lucide-react"
import { MapWidget } from "@/components/ui/MapWidget"

import { useLanguage } from "@/lib/LanguageContext"

function Footerdemo() {
  const { t } = useLanguage()
  return (
    <footer id="contacts" className="relative border-t border-light-stone/30 bg-bg-beige text-warm-black transition-colors duration-300 overflow-hidden custom-footer-padding">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-black/15 to-transparent" />

      {/* Giant background logo watermark covering the full footer with low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center">
        <div className="relative w-full max-w-[700px] h-[300px] opacity-[0.03] lg:opacity-[0.04]">
          <Image
            src="/imgs/logodark.png"
            alt="ArtSky Background Logo"
            fill
            sizes="700px"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      <div
        className="max-w-[1440px] mx-auto w-full relative z-10 px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        {/* ——— Main 4-Column Grid ——— */}
        <div className="grid gap-12 gap-x-8 md:gap-x-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-12 mb-10">
          {/* Column 1: Stay Connected (span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="text-[10px] text-warm-black/40 uppercase tracking-[0.35em] font-bold font-body flex items-center gap-2">
              <span className="w-4 h-px bg-warm-black/30" />
              {t.footer.quick_contact}
            </div>
            
            <div className="flex flex-col gap-3.5">
              <p className="text-sm text-warm-black/60 font-body leading-relaxed max-w-xs">
                {t.footer.whatsapp_desc}
              </p>
              
              <a
                href="https://wa.me/996553637901?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D1%83%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-[#25d366]/40 hover:bg-[#25d366] hover:text-white hover:border-[#25d366] text-[#25d366] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 font-body group w-full md:w-auto self-start"
                style={{ padding: "14px 32px" }}
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none text-warm-black/60 hover:text-warm-black hover:bg-warm-black/5 transition-all duration-300 cursor-pointer"
                      asChild
                    >
                      <a href="https://www.instagram.com/artsky.kg" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none text-warm-black/60 hover:text-warm-black hover:bg-warm-black/5 transition-all duration-300 cursor-pointer"
                      asChild
                    >
                      <a href="https://t.me/Aiguly_arh" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <Send className="h-4 w-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none text-warm-black/60 hover:text-warm-black hover:bg-warm-black/5 transition-all duration-300 cursor-pointer"
                      asChild
                    >
                      <a href="https://www.facebook.com/people/artstudioSKY/100024005093884/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none text-warm-black/60 hover:text-warm-black hover:bg-warm-black/5 transition-all duration-300 cursor-pointer"
                      asChild
                    >
                      <a href="https://www.youtube.com/@aiguliskakova7978" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Column 2: Navigation Links (span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="text-[10px] text-warm-black/40 uppercase tracking-[0.35em] font-bold font-body flex items-center gap-2">
              <span className="w-4 h-px bg-warm-black/30" />
              {t.footer.navigation}
            </div>
            <nav className="flex flex-col gap-4">
              {[
                { href: "#about", label: t.header.about },
                { href: "#services", label: t.header.services },
                { href: "#projects", label: t.header.projects },
                { href: "#process", label: t.header.process },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm uppercase tracking-[0.2em] font-bold text-warm-black/60 hover:text-warm-black transition-colors duration-300 font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details (span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="text-[10px] text-warm-black/40 uppercase tracking-[0.35em] font-bold font-body flex items-center gap-2">
              <span className="w-4 h-px bg-warm-black/30" />
              {t.footer.contacts}
            </div>
            <div className="flex flex-col gap-4.5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="w-3.5 h-3.5 text-warm-black/50 stroke-[1.5]" />
                  <span className="text-[9px] text-warm-black/40 uppercase tracking-[0.25em] font-bold font-body">{t.footer.phone}</span>
                </div>
                <a
                  href="tel:+996553637901"
                  className="text-base font-bold text-warm-black hover:text-warm-black/70 transition-colors duration-300 font-body tracking-wide"
                >
                  +996 (553) 63-79-01
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-warm-black/50 stroke-[1.5]" />
                  <span className="text-[9px] text-warm-black/40 uppercase tracking-[0.25em] font-bold font-body">{t.footer.hours}</span>
                </div>
                <p className="text-sm text-warm-black/70 font-body font-medium">{t.footer.hours_val}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-warm-black/50 stroke-[1.5]" />
                  <span className="text-[9px] text-warm-black/40 uppercase tracking-[0.25em] font-bold font-body">{t.footer.address}</span>
                </div>
                <p className="text-sm text-warm-black/80 font-semibold font-body leading-relaxed">
                  {t.footer.address_val}
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: 2GIS Map Widget (span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-[10px] text-warm-black/40 uppercase tracking-[0.35em] font-bold font-body flex items-center gap-2">
              <span className="w-4 h-px bg-warm-black/30" />
              {t.footer.map}
            </div>
            <div className="relative w-full h-[240px] border border-warm-black/10 overflow-hidden shadow-sm group">
              {/* Map overlay button */}
              <a
                href="https://2gis.kg/bishkek/firm/70000001036765142?m=74.602583%2C42.867246%2F16"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-warm-black/90 hover:bg-white hover:text-warm-black text-white px-3.5 py-2 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md backdrop-blur-sm"
              >
                <ExternalLink className="w-3 h-3" />
                {t.footer.gis}
              </a>
              <MapWidget />
            </div>
          </div>
        </div>
      </div>

      {/* ——— Bottom Footer Bar ——— */}
      <div className="border-t border-light-stone/50 pt-6 pb-4 flex justify-center items-center relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-warm-black/50 text-center font-body relative top-3.5">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}

export { Footerdemo }
