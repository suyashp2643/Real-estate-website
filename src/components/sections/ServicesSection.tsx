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
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-primary, #0f0f0f)' }}
    >
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
          <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">
            What We Build
          </span>
          <h2
            className="font-display text-4xl md:text-5xl mt-3 mb-4"
            style={{ color: 'var(--text-primary, #fdfaf4)' }}
          >
            Our <span className="gold-shimmer">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p
            className="max-w-xl mx-auto text-sm"
            style={{ color: 'var(--text-secondary, #aaa)' }}
          >
            Comprehensive construction solutions — from concept to completion,
            we handle every aspect of your dream project.
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
              style={{
                background: 'var(--bg-card, rgba(255,255,255,0.04))',
                border: '1px solid var(--border-color, rgba(212,168,32,0.08))',
                borderRadius: '16px',
                padding: '28px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 40px rgba(212,168,32,0.1)',
              }}
            >
              {/* Icon + title row */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'rgba(212,168,32,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    className="font-display text-lg font-semibold"
                    style={{ color: 'var(--text-primary, #fdfaf4)' }}
                  >
                    {service.title}
                  </h3>
                  <div
                    style={{
                      width: '32px',
                      height: '2px',
                      background: 'rgba(212,168,32,0.5)',
                      marginTop: '6px',
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed mb-5"
                style={{ color: 'var(--text-secondary, #777)' }}
              >
                {service.description}
              </p>

              {/* Enquire link */}
              <button
                onClick={scrollToContact}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#d4a820',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: 0,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Enquire Now →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}