'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '@/lib/data';

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a820]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,32,0.04)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">What We Build</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
            Our <span className="gold-shimmer">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#888] max-w-xl mx-auto text-sm">
            Comprehensive construction solutions — from concept to completion, we handle every aspect of your dream project.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="service-card glass rounded-2xl p-7 group border border-[rgba(212,168,32,0.08)] hover:border-[rgba(212,168,32,0.25)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[rgba(212,168,32,0.08)] flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[rgba(212,168,32,0.15)] transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#f0d080] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#d4a820]/40 mt-1 group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              <p className="text-[13px] text-[#777] leading-relaxed mb-5">
                {service.description}
              </p>

              <button
                onClick={scrollToContact}
                className="text-[12px] font-semibold text-[#d4a820] hover:text-[#f0d080] transition-colors duration-200 flex items-center gap-2 group/btn"
              >
                Enquire Now
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
