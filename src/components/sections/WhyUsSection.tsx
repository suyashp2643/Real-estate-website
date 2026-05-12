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
          className="mt-16 flex flex-wrap justify-center gap-5"
        >
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              whileHover={{
                y: -4,
                scale: 1.03,
                boxShadow: '0 12px 35px rgba(212,168,32,0.18)',
              }}
              style={{
                border: '1px solid rgba(212,168,32,0.28)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: '18px',
                padding: '18px 30px',
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--text-primary, #fdfaf4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '240px',
                minHeight: '68px',
                transition: 'all 0.3s ease',
              }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
