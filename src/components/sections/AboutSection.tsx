'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { STATS, TRUST_BADGES } from '@/lib/data';

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,32,0.04)_0%,transparent_60%)]" />
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full border border-[rgba(212,168,32,0.05)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-6">
                The Story Behind <br />
                <span className="gold-shimmer">Every Structure</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#d4a820] mb-6" />
              
              <div className="space-y-4 text-[14px] text-[#888] leading-relaxed">
                <p>
                  Founded in 2010 by a team of passionate engineers and visionary architects, 
                  <strong className="text-[#ccc]"> Jaybhadra Builders</strong> has grown to become 
                  Sangamner's most trusted name in construction.
                </p>
                <p>
                  Over 14 years, we've built not just buildings — but communities, businesses, and homes where 
                  generations will thrive. Every brick we lay carries our promise of quality, integrity, and lasting value.
                </p>
                <p>
                  Our team of 50+ skilled professionals uses modern construction technology, premium-grade materials, 
                  and time-tested craftsmanship to deliver projects that exceed expectations — always on time.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mt-8">
                {TRUST_BADGES.map((badge, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="trust-badge text-[11px]"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats + Image */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden h-72 mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-[11px] text-[#d4a820] uppercase tracking-wider mb-1">Est. 2010</div>
                  <div className="font-display text-xl text-white font-semibold">Jaybhadra Builders</div>
                  <div className="text-[12px] text-[#888]">Sangamner, Maharashtra</div>
                </div>
              </div>

              {/* Animated stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass rounded-xl p-5 text-center"
                  >
                    <div className="font-display text-3xl font-bold text-[#d4a820]">
                      {inView ? (
                        <CountUp end={stat.value} duration={2.5} delay={0.5 + i * 0.1} suffix={stat.suffix} />
                      ) : `0${stat.suffix}`}
                    </div>
                    <div className="text-[11px] text-[#666] uppercase tracking-wide mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
