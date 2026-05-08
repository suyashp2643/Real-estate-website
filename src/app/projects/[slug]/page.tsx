'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS, COMPANY, type Project } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const project = PROJECTS.find(p => p.slug === slug) as Project | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f]">
        <div className="text-6xl mb-4">🏗️</div>
        <h1 className="font-display text-3xl text-white mb-4">Project Not Found</h1>
        <button onClick={() => router.push('/')} className="btn-gold px-8 py-3">
          Back to Home
        </button>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🏗️ *Site Visit Request*\n\nProject: ${project.name}\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📅 Date: ${form.date}\n⏰ Time: ${form.time}`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>

      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/#projects')}
          className="glass rounded-full px-5 py-2.5 text-[13px] font-semibold flex items-center gap-2 hover:border-[#d4a820]/50 transition-all"
          style={{ color: 'var(--text-primary)' }}
        >
          ← Back to Projects
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-8 right-8">
          <span className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider ${
            project.status === 'ongoing'
              ? 'bg-green-500/90 text-white'
              : 'bg-[#d4a820]/90 text-[#0f0f0f]'
          }`}>
            {project.status === 'ongoing' ? '🟢 Ongoing' : '✅ Completed'}
          </span>
        </div>

        {/* Urgency */}
        {project.urgency && (
          <div className="absolute top-8 left-20">
            <span className="urgency-badge px-4 py-2 rounded-full text-[11px] font-bold text-white">
              🔥 {project.urgency}
            </span>
          </div>
        )}

        {/* Project title overlay */}
        <div className="absolute bottom-10 left-0 right-0 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em]">
              {project.category} · {project.location}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-2">
              {project.name}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left — Main Info */}
          <div className="lg:col-span-2 space-y-10">

            {/* Quick info bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { icon: '🏠', label: 'Type', value: project.specs },
                { icon: '📍', label: 'Location', value: project.location },
                { icon: '🏗️', label: 'Units', value: project.units || 'Multiple' },
                { icon: '📅', label: project.status === 'completed' ? 'Completed' : 'Expected', value: project.completionYear || '2025' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-[10px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                    {item.label}
                  </div>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* About Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
                About This Project
              </h2>
              <div className="w-12 h-0.5 bg-[#d4a820] mb-5" />
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Project Highlights
              </h2>
              <div className="w-12 h-0.5 bg-[#d4a820] mb-5" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 glass rounded-xl p-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[rgba(212,168,32,0.2)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#d4a820] text-[11px] font-bold">✓</span>
                    </div>
                    <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Amenities
              </h2>
              <div className="w-12 h-0.5 bg-[#d4a820] mb-5" />
              <div className="flex flex-wrap gap-3">
                {project.amenities?.map((item, i) => (
                  <span
                    key={i}
                    className="trust-badge text-[12px]"
                  >
                    ✅ {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right — Sticky Contact Card */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24 space-y-4"
            >

              {/* Urgency */}
              {project.urgency && (
                <div className="urgency-badge rounded-xl p-3 text-center">
                  <span className="text-white text-[12px] font-semibold">
                    🔥 {project.urgency}
                  </span>
                </div>
              )}

              {/* Contact card */}
              <div className="glass rounded-2xl p-6 border border-[rgba(212,168,32,0.2)]">
                <h3 className="font-display text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
                  Interested in this project?
                </h3>
                <p className="text-[12px] mb-5" style={{ color: 'var(--text-muted)' }}>
                  Get a free consultation from our team
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn-gold w-full py-3.5 text-[13px]"
                  >
                    📅 Book Free Site Visit
                  </button>

                  
                    href={`https://wa.me/${COMPANY.whatsapp}?text=Hi! I'm interested in ${project.name}. Please share details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-md border border-[#25D366]/40 text-[#25D366] text-[13px] font-semibold hover:bg-[#25D366]/10 transition-all"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </a>

                  
                    href={`tel:${COMPANY.phone}`}
                    className="btn-outline-gold w-full py-3.5 text-[13px] text-center block"
                  >
                    📞 Call Now — {COMPANY.phone}
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="glass rounded-2xl p-5 space-y-3">
                <div className="text-[11px] uppercase tracking-wider text-[#d4a820] font-semibold mb-3">
                  Why Jaybhadra Builders
                </div>
                {['✅ Trusted Since 2010', '🔧 3-Year Maintenance', '📋 RERA Compliant', '⭐ 4.9 Star Rated'].map((b, i) => (
                  <div key={i} className="text-[12px] flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                    {b}
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Site Visit Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={e => e.target === e.currentTarget && setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark rounded-3xl p-8 w-full max-w-md relative"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[rgba(212,168,32,0.3)] text-[#888] hover:text-white flex items-center justify-center"
            >
              ×
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="font-display text-2xl text-white mb-2">Visit Confirmed!</h3>
                <p className="text-[#888] text-sm">
                  Our team will WhatsApp you with details for <strong className="text-[#d4a820]">{project.name}</strong>!
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl text-white mb-1">Book a Site Visit</h3>
                  <p className="text-[12px] text-[#888]">{project.name}</p>
                </div>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Full Name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Time</label>
                      <select
                        value={form.time}
                        onChange={e => setForm(p => ({ ...p, time: e.target.value }))}
                        className="form-input"
                        required
                      >
                        <option value="">Select</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn-gold w-full py-3.5 text-sm">
                    📅 Book via WhatsApp
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
