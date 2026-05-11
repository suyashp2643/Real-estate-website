'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WHY_US, TRUST_BADGES } from '@/lib/data';

export default function WhyUsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-secondary, #080808)' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,32,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">
            Why Choose Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl mt-3 mb-4"
            style={{ color: 'var(--text-primary, #fdfaf4)' }}
          >
            Built on <span className="gold-shimmer">Excellence</span>
          </h2>
          <div className="section-divider mb-6" />
          <p
            className="max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary, #aaa)' }}
          >
            We don't just build structures — we craft legacies. Every project reflects
            our commitment to quality, transparency, and your trust.
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
              style={{
                background: 'var(--bg-card, rgba(255,255,255,0.04))',
                border: '1px solid var(--border-color, rgba(212,168,32,0.15))',
                borderRadius: '16px',
                padding: '28px',
                cursor: 'default',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 40px rgba(212,168,32,0.12)',
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(212,168,32,0.1)',
                  border: '1px solid rgba(212,168,32,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                }}
              >
                {item.icon}
              </div>

              {/* Gold line */}
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  background: '#d4a820',
                  marginBottom: '14px',
                  borderRadius: '2px',
                }}
              />

              {/* Title */}
              <h3
                className="font-display text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary, #fdfaf4)' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: 'var(--text-secondary, #888)' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {TRUST_BADGES.map((badge, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              style={{
                border: '1px solid rgba(212,168,32,0.3)',
                background: 'rgba(212,168,32,0.06)',
                borderRadius: '40px',
                padding: '8px 18px',
                fontSize: '12px',
                color: 'var(--text-primary, #fdfaf4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}