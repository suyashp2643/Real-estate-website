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
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', phone: '', date: '', time: '' });
  const project = PROJECTS.find((p: any) => p.slug === slug) as any;

  useEffect(() => {
    window.scrollTo(0, 0);
    const saved = localStorage.getItem('jb-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    setMounted(true);
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent('Site Visit - ' + (project?.name || '') + ' Name: ' + form.name + ' Phone: ' + form.phone + ' Date: ' + form.date + ' Time: ' + form.time);
    setSubmitted(true);
    setTimeout(() => { window.open('https://wa.me/' + COMPANY.whatsapp + '?text=' + msg, '_blank'); }, 800);
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(212,168,32,0.15)',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '28px',
    marginBottom: '16px',
    color: 'var(--text-primary, #fdfaf4)',
  };

  const goldLineStyle: React.CSSProperties = {
    width: '48px',
    height: '2px',
    background: '#d4a820',
    marginBottom: '20px',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary, #0f0f0f)', fontFamily: 'Inter, sans-serif' }}>

      {mounted && !project && (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🏗️</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', marginBottom: '16px', color: 'var(--text-primary, #fdfaf4)' }}>Project Not Found</h1>
          <button onClick={() => router.push('/')} className="btn-gold" style={{ padding: '12px 32px' }}>Back to Home</button>
        </div>
      )}

      {!mounted && (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f0f' }}>
          <div style={{ color: '#d4a820', fontFamily: 'Playfair Display, serif', fontSize: '24px' }}>Loading...</div>
        </div>
      )}

      {mounted && project && (
        <div>

          <div style={{ position: 'fixed', top: '24px', left: '24px', zIndex: 50 }}>
            <button
              onClick={() => router.push('/#projects')}
              style={{ background: 'rgba(15,15,15,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,168,32,0.3)', borderRadius: '999px', padding: '10px 20px', color: 'var(--text-primary, #fdfaf4)', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
            >
              ← Back to Projects
            </button>
          </div>

          <div style={{ position: 'relative', height: '55vh', overflow: 'hidden' }}>
            <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f0f0f, rgba(15,15,15,0.4), transparent)' }} />
            <div style={{ position: 'absolute', top: '32px', right: '32px' }}>
              <span style={{ padding: '8px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', background: project.status === 'ongoing' ? 'rgba(34,197,94,0.9)' : 'rgba(212,168,32,0.9)', color: project.status === 'ongoing' ? 'white' : '#0f0f0f' }}>
                {project.status === 'ongoing' ? '🟢 Ongoing' : '✅ Completed'}
              </span>
            </div>
            {project.urgency && (
              <div style={{ position: 'absolute', top: '32px', left: '120px' }}>
                <span style={{ background: 'rgba(192,57,43,0.9)', padding: '8px 16px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', color: 'white' }}>🔥 {project.urgency}</span>
              </div>
            )}
            <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, padding: '0 24px', maxWidth: '1280px', margin: '0 auto' }}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div style={{ fontSize: '11px', color: '#d4a820', textTransform: 'uppercase', letterSpacing: '0.3em' }}>{project.category} · {project.location}</div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: '700', color: 'white', marginTop: '8px' }}>{project.name}</h1>
              </motion.div>
            </div>
          </div>

          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
            <div className="grid lg:grid-cols-3 gap-12">

              <div className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: '🏠', label: 'Type', value: project.specs },
                    { icon: '📍', label: 'Location', value: project.location },
                    { icon: '🏗️', label: 'Units', value: project.units || 'Multiple' },
                  ].map((item, i) => (
                    <div key={i} style={cardStyle}>
                      <div style={{ fontSize: '24px', marginBottom: '6px' }}>{item.icon}</div>
                      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted, #888)', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary, #fdfaf4)' }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 style={sectionHeadingStyle}>About This Project</h2>
                  <div style={goldLineStyle} />
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'var(--text-secondary, #aaa)' }}>{project.fullDescription || project.description}</p>
                </div>

                {project.highlights && (
                  <div>
                    <h2 style={sectionHeadingStyle}>Project Highlights</h2>
                    <div style={goldLineStyle} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.highlights.map((item: string, i: number) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,168,32,0.12)', borderRadius: '12px', padding: '14px 16px' }}>
                          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(212,168,32,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ color: '#d4a820', fontSize: '11px', fontWeight: '700' }}>✓</span>
                          </div>
                          <span style={{ fontSize: '13px', color: 'var(--text-secondary, #aaa)' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.amenities && (
                  <div>
                    <h2 style={sectionHeadingStyle}>Amenities</h2>
                    <div style={goldLineStyle} />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      {project.amenities.map((item: string, i: number) => (
                        <span key={i} style={{ border: '1px solid rgba(212,168,32,0.3)', background: 'rgba(212,168,32,0.05)', borderRadius: '40px', padding: '8px 16px', fontSize: '12px', color: '#f0d080', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          ✅ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              <div>
                <div style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                  {project.urgency && (
                    <div style={{ background: 'linear-gradient(135deg, #c0392b, #e74c3c)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                      <span style={{ color: 'white', fontSize: '12px', fontWeight: '700' }}>🔥 {project.urgency}</span>
                    </div>
                  )}

                  <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,168,32,0.2)', borderRadius: '16px', padding: '24px' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', marginBottom: '6px', color: 'var(--text-primary, #fdfaf4)' }}>Interested in this project?</h3>
                    <p style={{ fontSize: '12px', marginBottom: '20px', color: 'var(--text-muted, #888)' }}>Get a free consultation from our team</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <button onClick={() => setShowModal(true)} className="btn-gold" style={{ width: '100%', padding: '14px', fontSize: '13px' }}>📅 Book Free Site Visit</button>
                      <a href={'https://wa.me/' + COMPANY.whatsapp + '?text=Hi I am interested in ' + project.name} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', borderRadius: '6px', border: '1.5px solid rgba(37,211,102,0.4)', color: '#25D366', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>WhatsApp Us</a>
                      <a href={'tel:' + COMPANY.phone} style={{ display: 'block', textAlign: 'center', padding: '13px', borderRadius: '6px', border: '1.5px solid #d4a820', color: '#d4a820', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>📞 Call Now</a>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,168,32,0.12)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d4a820', fontWeight: '700', marginBottom: '12px' }}>Why Jaybhadra Builders</div>
                    {['✅ Trusted Since 2010', '🔧 3-Year Maintenance', '📋 RERA Compliant', '⭐ 4.9 Star Rated'].map((b, i) => (
                      <div key={i} style={{ fontSize: '12px', color: 'var(--text-secondary, #aaa)', marginBottom: '8px' }}>{b}</div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {showModal && (
            <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,168,32,0.2)', borderRadius: '24px', padding: '32px', width: '100%', maxWidth: '420px', position: 'relative' }}>
                <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(212,168,32,0.3)', background: 'transparent', color: '#888', cursor: 'pointer', fontSize: '18px' }}>×</button>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '24px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏗️</div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: 'white', marginBottom: '8px' }}>Visit Confirmed!</h3>
                    <p style={{ color: '#888', fontSize: '14px' }}>Our team will contact you for <strong style={{ color: '#d4a820' }}>{project.name}</strong></p>
                  </div>
                ) : (
                  <div>
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: 'white', marginBottom: '4px' }}>Book a Site Visit</h3>
                      <p style={{ fontSize: '12px', color: '#888' }}>{project.name}</p>
                    </div>
                    <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Your Name</label>
                        <input type="text" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Full Name" className="form-input" required />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Phone Number</label>
                        <input type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} placeholder="+91 98765 43210" className="form-input" required />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Date</label>
                          <input type="date" value={form.date} onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))} className="form-input" min={new Date().toISOString().split('T')[0]} required />
                        </div>
                        <div>
                          <label style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>Time</label>
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
                      <button type="submit" className="btn-gold" style={{ width: '100%', padding: '14px', fontSize: '14px' }}>📅 Book via WhatsApp</button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}