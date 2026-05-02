'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/data';

interface Props {
  projectName: string;
  onClose: () => void;
}

export default function SiteVisitModal({ projectName, onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🏗️ *Site Visit Request*\n\nProject: ${projectName}\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📅 Date: ${form.date}\n⏰ Time: ${form.time}`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass-dark rounded-3xl p-8 w-full max-w-md relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[rgba(212,168,32,0.3)] text-[#888] hover:text-white hover:border-white transition-all flex items-center justify-center text-sm"
        >
          ×
        </button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-6"
          >
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="font-display text-2xl text-white mb-2">Visit Confirmed!</h3>
            <p className="text-[#888] text-sm">
              Our team will WhatsApp you with site visit details. See you at <strong className="text-[#d4a820]">{projectName}</strong>!
            </p>
          </motion.div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <span className="urgency-badge inline-block px-4 py-1.5 rounded-full text-white text-[11px] font-bold mb-4">
                🏗️ FREE Site Visit
              </span>
              <h3 className="font-display text-2xl text-white mb-1">Book a Site Visit</h3>
              <p className="text-[12px] text-[#888]">{projectName}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Preferred Date</label>
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
                  <label className="text-[11px] text-[#666] uppercase tracking-wide block mb-2">Preferred Time</label>
                  <select
                    value={form.time}
                    onChange={e => setForm(p => ({ ...p, time: e.target.value }))}
                    className="form-input"
                    required
                  >
                    <option value="">Select Time</option>
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
                📅 Book Free Site Visit via WhatsApp
              </button>
              <p className="text-[11px] text-[#555] text-center">No charges. Our team will escort you personally.</p>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
