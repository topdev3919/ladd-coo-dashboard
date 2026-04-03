"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Industries", href: "#expertise" },
  { label: "Presence", href: "#presence" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <>
      <header
        className={cn(
          "top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-[var(--color-cream)]/95 backdrop-blur-sm" : "bg-[var(--color-cream)]"
        )}
      >
        {/* ── Main nav row ── */}
        <div className="absolute left-10 md:left-32 lg:left-32 top-0 w-[px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
        <div className="absolute hidden md:block left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
        <div className="absolute right-10 md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />
        <div className="absolute z-20 top-[70px] md:top-[70px] left-4 md:left-[calc((10.5rem+8rem)/2)] -translate-x-1/2 flex flex-col items-center">
          {/* Dot */}
          <div className="w-[4px] h-[4px] bg-[#c0735a] mb-2" />
        </div>
        <div className="flex items-center h-14 px-10 lg:px-32 md:px-32 border-b border-[var(--color-border)]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-10 flex-shrink-0" aria-label="Ladd & Co.">
            <div className="w-8 h-6 md:pl-3 pl-2">
              <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-auto object-cover"
              />
            </div>
            <span className="[font-family:var(--font-eiko-medium)] text-sm tracking-wide text-[16px]">
              Ladd &amp; Co.
            </span>
          </a>

          {/* Desktop Nav - center */}
          <div className="hidden md:flex items-center ml-auto gap-8 flex-shrink-0">
            <nav className="hidden md:flex items-center gap-8 mx-auto">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[13px] [font-family:var(--font-mono-regular)] tracking-[0.15em] uppercase text-[var(--color-muted)] hover:text-[var(--color-charcoal)] transition-colors duration-200 cursor-pointer bg-transparent border-none pb-0.5 border-b border-transparent hover:border-[var(--color-charcoal)]">
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-5 flex-shrink-0">
              <a href="#"
                className="text-[13px] [font-family:var(--font-mono-medium)] tracking-[0.15em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-muted)] transition-colors">
                Client Login
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto p-1 text-[var(--color-charcoal)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* ── Green sub-bar with fade starting from center ── */}
        <div className=" items-center bg-transparent h-8 px-8 md:px-16 relative overflow-hidden">
          <div className="ml-4 md:ml-10 lg:ml-16 bg-[#b5bc9d] h-full w-full flex items-center relative">
            <div className="absolute top-0 h-full pointer-events-none" style={{ left: "45%", right: 0, background: "linear-gradient(to right, transparent, var(--color-cream))",}} />

            <a href="#contact" className="flex items-center gap-2 px-9 md:px-16 [font-family:var(--font-eiko-medium)] text-[13px] font-medium tracking-[0.15em] text-[var(--color-charcoal)] hover:opacity-70 transition-opacity relative z-10" >
              Request an Introduction →
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/20" onClick={() => setMenuOpen(false)} />
        <div className={cn(
          "absolute inset-x-0 top-0 bg-[#b5bc9d] transition-transform duration-300",
          menuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <div className="flex items-center justify-between px-4 h-14 border-b border-[var(--color-sage-dark)]/30">
            <a href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
              <div className="w-6 h-6">
              <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-auto object-cover"
              />
              </div>
              <span className="font-serif text-sm" style={{ fontWeight: 400 }}>Ladd &amp; Co.</span>
            </a>
            <button onClick={() => setMenuOpen(false)} className="p-1">
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--color-sage-dark)]/30">
            <div className="w-2 h-2 rounded-full bg-[var(--color-orange)]" />
            <a href="#contact" className="font-sans text-sm" onClick={() => setMenuOpen(false)}>
              Request an Introduction →
            </a>
          </div>

          <div className="px-5 pt-6 pb-2">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">Firm</span>
          </div>

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-5 py-4 font-serif text-2xl text-[var(--color-charcoal)] hover:opacity-70 transition-opacity border-b border-[var(--color-sage-dark)]/20 cursor-pointer bg-transparent border-x-0 border-t-0"
                style={{ fontWeight: 400 }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="px-5 pt-6 pb-2">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">Contact</span>
          </div>
          <div className="px-5 py-2">
            <a href="mailto:office@laddco.com" className="font-sans text-sm hover:opacity-70 transition-opacity">
              office@laddco.com
            </a>
          </div>
          <div className="px-5 py-8 border-t border-[var(--color-sage-dark)]/30 mt-4">
            <a href="#" className="font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-charcoal)]">
              Client Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}