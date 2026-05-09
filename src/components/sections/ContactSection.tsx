'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { COMPANY, INTEREST_OPTIONS, BUDGET_OPTIONS } from '@/lib/data';

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({
    name: '', phone: '', email: '', interestedIn: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone) return;
    setStatus('loading');
    try {
      const { storeLead } = await import('@/lib/leadService');
      await storeLead({ ...form, source: 'Website Contact Form' });
      const adminPhone = COMPANY.whatsapp;
      const adminMsg = encodeURIComponent(
        '🏗️ *New Lead - Jaybhadra Builders*\n\n' +
        '👤 Name: ' + form.name + '\n📞 Phone: ' + form.phone + '\n📧 Email: ' + (form.email || 'N/A') + '\n' +
        '🏠 Interested In: ' + form.interestedIn + '\n💰 Budget: ' + form.budget + '\n💬 Message: ' + (form.message || 'N/A')
      );
      setStatus('success');
      setTimeout(() => {
        window.open('https://wa.me/' + adminPhone + '?text=' + adminMsg, '_blank');
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a820]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,32,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">
              Get In Touch
            </span>

            <h2
              className="font-display text-4xl md:text-5xl mt-3 mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Start Your <br />
              <span className="gold-shimmer">Dream Project</span>
            </h2>

            <div className="w-16 h-0.5 bg-[#d4a820] mb-6" />

            <p
              className="text-[14px] leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Ready to turn your vision into reality? Our team will contact you within 2 hours
              with a free consultation and project estimate.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">

              {/* Sangamner Office */}
              <div
                className="glass rounded-xl p-4"
                style={{ borderLeft: '3px solid #d4a820' }}
              >
                <div className="text-[11px] text-[#d4a820] uppercase tracking-wider font-bold mb-3">
                  🏢 Sangamner Office — Head Office
                </div>
                <div className="space-y-3">
                  
                    href={'tel:' + COMPANY.phone}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-lg">📞</span>
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-wide"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Call
                      </div>
                      <div
                        className="text-sm font-semibold group-hover:text-[#d4a820] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {COMPANY.phone}
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">📍</span>
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-wide"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Address
                      </div>
                      <div
                        className="text-[13px]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {COMPANY.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nashik Office */}
              <div
                className="glass rounded-xl p-4"
                style={{ borderLeft: '3px solid #d4a820' }}
              >
                <div className="text-[11px] text-[#d4a820] uppercase tracking-wider font-bold mb-3">
                  🏢 Nashik Office
                </div>
                <div className="space-y-3">
                  
                    href={'tel:' + COMPANY.nashikPhone}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-lg">📞</span>
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-wide"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Call
                      </div>
                      <div
                        className="text-sm font-semibold group-hover:text-[#d4a820] transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {COMPANY.nashikPhone}
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">📍</span>
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-wide"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Address
                      </div>
                      <div
                        className="text-[13px]"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {COMPANY.nashikAddress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              
                href={'https://wa.me/' + COMPANY.whatsapp + '?text=Hello! I would like to know more about your projects.'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-[#25D366]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(37,211,102,0.1)] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div
                    className="text-[11px] uppercase tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    WhatsApp
                  </div>
                  <div
                    className="font-semibold text-sm group-hover:text-[#25D366] transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Chat on WhatsApp
                  </div>
                </div>
              </a>

            </div>

            {/* Maps — Both Offices */}
            <div className="mt-8 space-y-4">
              <div>
                <div className="text-[11px] text-[#d4a820] uppercase tracking-wider font-semibold mb-2">
                  📍 Sangamner Office
                </div>
                <div className="rounded-2xl overflow-hidden border border-[rgba(212,168,32,0.15)] h-44">
                  <iframe
                    src={COMPANY.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sangamner Office"
                  />
                </div>
              </div>
              <div>
                <div className="text-[11px] text-[#d4a820] uppercase tracking-wider font-semibold mb-2">
                  📍 Nashik Office
                </div>
                <div className="rounded-2xl overflow-hidden border border-[rgba(212,168,32,0.15)] h-44">
                  <iframe
                    src={COMPANY.nashikMapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nashik Office"
                  />
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 border border-[rgba(212,168,32,0.15)]">

              <div className="urgency-badge rounded-xl p-3 mb-6 text-center">
                <span className="text-white text-[12px] font-semibold">
                  🔥 Limited Units Available — Prices Rising Soon! Get Your Free Callback Now
                </span>
              </div>

              <h3
                className="font-display text-2xl mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Request Free <span className="text-[#d4a820]">Callback</span>
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h4
                    className="font-display text-2xl mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Thank You, {form.name}!
                  </h4>
                  <p
                    className="text-sm mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Our team will call you within{' '}
                    <strong className="text-[#d4a820]">2 hours</strong>.
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    A WhatsApp confirmation has been sent.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-[11px] uppercase tracking-wide block mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Patil"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="text-[11px] uppercase tracking-wide block mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-[11px] uppercase tracking-wide block mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-[11px] uppercase tracking-wide block mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Interested In
                      </label>
                      <select
                        name="interestedIn"
                        value={form.interestedIn}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select Type</option>
                        {INTEREST_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-[11px] uppercase tracking-wide block mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select Budget</option>
                        {BUDGET_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-[11px] uppercase tracking-wide block mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={3}
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold w-full text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0f0f0f]/30 border-t-[#0f0f0f] rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : '🏗️ Request Free Callback — Get Called in 2 Hours'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-[12px] text-center">
                      Something went wrong. Please call us directly.
                    </p>
                  )}

                  <p
                    className="text-[11px] text-center"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    🔒 Your information is 100% confidential. No spam, ever.
                  </p>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
