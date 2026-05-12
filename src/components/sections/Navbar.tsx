'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '@/lib/data';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/lib/ThemeContext';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'navbar-scroll py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Jaybhadra Builders"
              className="h-14 w-14 object-contain rounded-full"
            />
            <div className="flex flex-col items-start">
              <span className="font-display font-bold text-lg text-white leading-tight">
                Jay<span className="gold-shimmer">bhadra</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888] font-light">
                Builders
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] font-medium text-[#ccc] hover:text-[#d4a820] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA — FIXED: restored missing <a */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-outline-gold text-[12px] py-2.5 px-5"
            >
              📞 Call Now
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-gold text-[12px] py-2.5 px-5"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#d4a820] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#d4a820] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#d4a820] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0f0f0f] border-t border-[rgba(212,168,32,0.2)] px-6 py-4"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left py-3 text-[14px] text-[#ccc] hover:text-[#d4a820] border-b border-[rgba(255,255,255,0.05)] transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex gap-3 mt-4 items-center">
                <ThemeToggle />
                <a href={`tel:${COMPANY.phone}`} className="btn-outline-gold flex-1 text-center text-[12px]">
                  📞 Call
                </a>
                <button onClick={() => scrollTo('#contact')} className="btn-gold flex-1 text-[12px]">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
