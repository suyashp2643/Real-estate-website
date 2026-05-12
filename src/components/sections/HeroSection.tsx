'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { STATS, COMPANY } from '@/lib/data';
import CountUp from 'react-countup';

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const t2 = setTimeout(() => setStartCount(true), 1200);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1920&q=90')`,
            transform: 'scale(1.1)',
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/70 via-transparent to-[#0f0f0f]/30" />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a820] to-transparent opacity-40" />
      </div>

      {/* Floating geometric decoration */}
      <div className="absolute top-1/4 right-10 w-80 h-80 border border-[rgba(212,168,32,0.08)] rounded-full" />
      <div className="absolute top-1/3 right-20 w-48 h-48 border border-[rgba(212,168,32,0.06)] rounded-full" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Building{' '}
            <span className="gold-shimmer">Dreams,</span>
            <br />
            Delivering{' '}
            <span className="italic font-normal">Trust</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-[#aaa] leading-relaxed mb-10 max-w-xl"
          >
            Sangamner's most trusted builders since 2010. Premium residential & commercial 
            projects crafted with world-class materials, delivered on time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="btn-gold text-sm px-8 py-4"
            >
              🏗️ Explore Projects
            </button>
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-outline-gold text-sm px-8 py-4"
            >
              📞 Call Now — {COMPANY.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hello! I'm interested in your projects.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold text-[#25D366] border border-[#25D366]/40 rounded-md px-6 py-4 hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="glass rounded-xl p-4 text-center border border-[rgba(212,168,32,0.15)]">
                <div className="font-display text-3xl md:text-4xl font-bold text-[#d4a820]">
                  {startCount ? (
                    <CountUp end={stat.value} duration={2.5} delay={i * 0.2} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="text-[12px] text-[#888] uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[11px] text-[#666] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#d4a820] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
