'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHY_US } from '@/lib/data';

export default function WhyUsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#080808]">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,32,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
            Built on <span className="gold-shimmer">Excellence</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#888] max-w-xl mx-auto text-sm leading-relaxed">
            We don't just build structures — we craft legacies. Every project reflects our commitment to quality, transparency, and your trust.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="service-card glass rounded-2xl p-7 group cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[rgba(212,168,32,0.1)] border border-[rgba(212,168,32,0.2)] flex items-center justify-center text-2xl mb-5 group-hover:bg-[rgba(212,168,32,0.15)] transition-colors duration-300">
                {item.icon}
              </div>
              
              {/* Gold line accent */}
              <div className="w-10 h-0.5 bg-[#d4a820] mb-4 group-hover:w-full transition-all duration-500 ease-out" />
              
              <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-[#f0d080] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#888] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {['✅ RERA Compliant', '🔧 3-Year Maintenance', '🏅 ISO Certified', '⭐ 4.9 Star Rating', '🤝 500+ Families Served'].map((badge, i) => (
            <span key={i} className="trust-badge text-[12px]">{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
