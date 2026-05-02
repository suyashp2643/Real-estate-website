'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TESTIMONIALS } from '@/lib/data';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a820]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,32,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">Client Stories</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
            What Our <span className="gold-shimmer">Families Say</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-10 text-center relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 left-8 font-display text-7xl text-[#d4a820]/15 leading-none select-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-[#d4a820] text-lg">★</span>
                  ))}
                </div>

                <p className="text-[15px] text-[#bbb] leading-relaxed italic mb-8 relative z-10">
                  "{t.review}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a820] to-[#9a7614] flex items-center justify-center text-[#0f0f0f] font-bold font-display text-lg">
                    {t.name[0]}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-[12px] text-[#d4a820]">{t.property}</div>
                    <div className="text-[11px] text-[#666]">📍 {t.location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2 bg-[#d4a820]'
                    : 'w-2 h-2 bg-[#333] hover:bg-[#d4a820]/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-[rgba(212,168,32,0.3)] text-[#d4a820] hover:bg-[rgba(212,168,32,0.1)] transition-all flex items-center justify-center text-lg"
            >
              ←
            </button>
            <button
              onClick={() => goTo((current + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-[rgba(212,168,32,0.3)] text-[#d4a820] hover:bg-[rgba(212,168,32,0.1)] transition-all flex items-center justify-center text-lg"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Google rating banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="glass rounded-full px-8 py-4 flex items-center gap-4">
            <div className="text-2xl">⭐</div>
            <div>
              <div className="text-white font-semibold text-sm">4.9 / 5 Stars</div>
              <div className="text-[11px] text-[#666]">Based on 200+ Google Reviews</div>
            </div>
            <div className="w-px h-8 bg-[rgba(212,168,32,0.2)]" />
            <div className="text-[12px] text-[#d4a820]">Google Verified</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
