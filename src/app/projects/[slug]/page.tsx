'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS, COMPANY } from '@/lib/data';
import { useEffect, useState } from 'react';

type FormState = { name: string; phone: string; date: string; time: string };

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', phone: '', date: '', time: '' });
  const project = PROJECTS.find((p: any) => p.slug === slug) as any;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
        <div className="text-6xl mb-4">🏗️</div>
        <h1 className="font-display text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>Project Not Found</h1>
        <button onClick={() => router.push('/')} className="btn-gold px-8 py-3">Back to Home</button>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent('Site Visit Request - Project: ' + project.name + ' Name: ' + form.name + ' Phone: ' + form.phone + ' Date: ' + form.date + ' Time: ' + form.time);
    setSubmitted(true);
    setTimeout(() => { window.open('https://wa.me/' + COMPANY.whatsapp + '?text=' + msg, '_blank'); }, 800);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>

      <div className="fixed top-6 left-6 z-50">
        <button onClick={() => router.push('/#projects')} className="glass rounded-full px-5 py-2.5 text-[13px] font-semibold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
          ← Back to Projects
        </button>
      </div>

      <div className="relative h-[55vh] overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />
        <div className="absolute top-8 right-8">
          <span className={'px-4 py-2 rounded-full text-[12px] font-bold uppercase ' + (project.status === 'ongoing' ? 'bg-green-500/90 text-white' : 'bg-[#d4a820]/90 text-[#0f0f0f]')}>
            {project.status === 'ongoing' ? '🟢 Ongoing' : '✅ Completed'}
          </span>
        </div>
        {project.urgency && (
          <div className="absolute top-8 left-24">
            <span className="urgency-badge px-4 py-2 rounded-full text-[11px] font-bold text-white">🔥 {project.urgency}</span>
          </div>
        )}
        <div className="absolute bottom-10 left-0 right-0 px-6 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em]">{project.category} · {project.location}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mt-2">{project.name}</h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-10">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '🏠', label: 'Type', value: project.specs },
                { icon: '📍', label: 'Location', value: project.location },
                { icon: '🏗️', label: 'Units', value: project.units || 'Multiple' },
                { icon: '📅', label: project.status === 'completed' ? 'Completed' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-[10px] uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
                  <div className="text-[12px] font-semibold" style={{ color: 'var(--text-primary)' }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>About This Project</h2>
              <div className="w-12 h-0.5 bg-[#d4a820] mb-5" />
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.fullDescription || project.description}</p>
            </div>

            {project.highlights && (
              <div>
                <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Project Highlights</h2>
                <div className="w-12 h-0.5 bg-[#d4a820] mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 glass rounded-xl p-4">
                      <div className="w-6 h-6 rounded-full bg-[rgba(212,168,32,0.2)] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#d4a820] text-[11px] font-bold">✓</span>
                      </div>
                      <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.amenities && (
              <div>
                <h2 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Amenities</h2>
                <div className="w-12 h-0.5 bg-[#d4a820] mb-5" />
                <div className="flex flex-wrap gap-3">
                  {project.amenities.map((item: string, i: number) => (
                    <span key={i} className="trust-badge text-[12px]">✅ {item}</span>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div>
            <div className="sticky top-24 space-y-4">

              {project.urgency && (
                <div className="urgency-badge rounded-xl p-3 text-center">
                  <span className="text-white text-[12px] font-semibold">🔥 {project.urgency}</span>
                </div>
              )}

              <div className="glass rounded-2xl p-6 border border-[rgba(212,168,32,0.2)]">
                <h3 className="font-display text-xl mb-1" style={{ color: 'var(--text-primary)' }}>Interested in this project?</h3>
                <p className="text-[12px] mb-5" style={{ color: 'var(--text-muted)' }}>Get a free consultation from our team</p>
                <div className="space-y-3">
                  <button onClick={() => setShowModal(true)} className="btn-gold w-full py-3.5 text-[13px]">📅 Book Free Site Visit</button>
                  <a href={'https://wa.me/' + COMPANY.whatsapp + '?text=Hi I am interested in ' + project.name} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-md border border-[#25D366]/40 text-[#25D366] text-[13px] font-semibold hover:bg-[#25D366]/10 transition-all">
                    WhatsApp Us
                  </a>
                  <a href={'tel:' + COMPANY.phone} className="btn-outline-gold w-full py-3.5 text-[13px] text-center block">📞 Call Now</a>
                </div>
              </div>

              <div className="glass rounded-2xl p-5">
                <div className="text-[11px] uppercase tracking-wider text-[#d4a820] font-semibold mb-3">Why Jaybhadra Builders</div>
                {['✅ Trusted Since 2010', '🔧 3-Year Maintenance', '📋 RERA Compliant', '⭐ 4.9 Star Rated'].map((b, i) => (
                  <div key={i} className="text-[12px] flex items-center gap-2 mb-2" style={{ color: 'var(--text-secondary)' }}>{b}</div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-dark rounded-3xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[rgba(212,168,32,0.3)] text-[#888] hover:text-white flex items-center justify-center text-lg">×</button>
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="font-display text-2xl text-white mb-2">Visit Confirmed!</h3>
                <p className="text-[#888] text-sm">Our team will contact you for <strong className="text-[#d4a820]">{project.name}</strong></p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl text-white mb-1">Book a Site Visit</h3>
                  <p className="text-[12px] text-[#888]">{project.name}</p>
                </div>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Your Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Full Name" className="form-input" required />
                  </div>
                  <div>
                    <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} placeholder="+91 98765 43210" className="form-input" required />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Date</label>
                      <input type="date" value={form.date} onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))} className="form-input" min={new Date().toISOString().split('T')[0]} required />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Time</label>
                      <select value={form.time} onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))} className="form-input" required>
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
                  <button type="submit" className="btn-gold w-full py-3.5 text-sm">📅 Book via WhatsApp</button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}

    </div>
  );
}
