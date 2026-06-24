import { Button } from "@/components/ui/button"
import { MapWidget } from "@/components/ui/MapWidget";
import Link from "next/link";

interface FooterProps {
  logo: React.ReactNode
  brandName?: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-bg-beige text-warm-black border-t border-light-stone/50 shadow-sm custom-footer-padding">
      <div 
        className="max-w-[1440px] mx-auto w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column (span 5): Contacts, Map */}
          <div className="lg:col-span-5 font-body flex flex-col">
            <div className="text-[10px] text-warm-black/50 uppercase tracking-[0.3em] font-bold mb-2.5 font-body">Контакты:</div>
            <a href="tel:+996553637901" className="text-base text-warm-black font-bold hover:text-warm-black/70 transition-colors duration-300 mb-1.5 font-body">
              +996 (553) 63-79-01
            </a>
            <div className="text-xs text-warm-black/50 font-light mb-5 font-body">
              Пн — Сб: 09:00 - 18:00
            </div>

            <div className="text-[10px] text-warm-black/50 uppercase tracking-[0.3em] font-bold mb-2.5 font-body">Наш офис:</div>
            <div className="text-xs text-warm-black/80 font-medium mb-4">г. Бишкек, ул. Боконбаева 115</div>
            
            {/* 2GIS Map Widget - bigger & stronger */}
            <div className="w-full h-[320px] bg-light-stone/30 border border-warm-black/10 overflow-hidden relative mb-4">
              {/* Custom Map Overlay Button */}
              <a
                href="https://2gis.kg/bishkek/firm/70000001036765142?m=74.602583%2C42.867246%2F16"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 bg-warm-black/90 hover:bg-white hover:text-warm-black text-white border border-warm-black/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-none transition-colors duration-300 z-10 flex items-center gap-1.5 shadow-lg"
              >
                Открыть в 2ГИС
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <MapWidget />
            </div>
          </div>
 
          {/* Right Column (span 7): Navigation, Logo, Socials underneath */}
          <div className="lg:col-span-7 flex flex-col justify-between items-end mt-8 lg:mt-0">
            {/* Navigation links at the top right */}
            <nav className="w-full lg:flex lg:justify-end">
              <ul className="list-none flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                {mainLinks.map((link, i) => (
                  <li key={i} className="shrink-0">
                    <a
                      href={link.href}
                      className="text-xs md:text-sm uppercase tracking-[0.15em] font-semibold text-warm-black/80 hover:text-warm-black transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
 
            {/* Logo and Social Media links placed under the navigation */}
            <div className="flex flex-col items-end gap-6 mt-16">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-x-2 block"
                aria-label={brandName || "Art Studio Sky"}
              >
                {logo}
                {brandName && <span className="font-bold text-lg font-heading tracking-wider uppercase text-warm-black">{brandName}</span>}
              </Link>
 
              {/* Social Media links - borderless, spaced */}
              <ul className="flex list-none gap-x-3">
                {socialLinks.map((link, i) => (
                  <li key={i}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-none text-warm-black/70 hover:text-warm-black hover:bg-warm-black/5 transition-colors duration-300 cursor-pointer flex items-center justify-center p-0"
                      asChild
                    >
                      <a href={link.href} target="_blank" aria-label={link.label} rel="noopener noreferrer">
                        {link.icon}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 
        {/* Centered Copyright */}
        <div className="mt-12 lg:mt-16 text-center text-xs text-warm-black/40 font-body">
          {copyright.text}
        </div>
      </div>
    </footer>
  )
}
