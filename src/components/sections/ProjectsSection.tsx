'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PROJECTS } from '@/lib/data';
import SiteVisitModal from '../ui/SiteVisitModal';
import Image from 'next/image';

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'Completed', value: 'completed' },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalProject, setModalProject] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = PROJECTS.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter || p.status === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{background: 'var(--bg-primary)'}}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a820]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] text-[#d4a820] uppercase tracking-[0.3em] font-medium">Our Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
            Landmark <span className="gold-shimmer">Projects</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#888] max-w-xl mx-auto text-sm">
            From premium residences to commercial landmarks — each project is a testament to our craftsmanship.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-[#d4a820] text-[#0f0f0f]'
                  : 'border border-[rgba(212,168,32,0.3)] text-[#888] hover:border-[#d4a820] hover:text-[#d4a820]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="project-card glass rounded-2xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="card-image absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="gallery-overlay absolute inset-0" />

                  {/* Status badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider z-10 ${
                    project.status === 'ongoing'
                      ? 'bg-green-500/90 text-white'
                      : 'bg-[#d4a820]/90 text-[#0f0f0f]'
                  }`}>
                    {project.status === 'ongoing' ? '🟢 Ongoing' : '✅ Completed'}
                  </div>

                  {/* Urgency badge */}
                  {project.urgency && (
                    <div className="absolute top-4 right-4 urgency-badge px-2 py-1 rounded-full text-[10px] font-bold text-white z-10">
                      🔥 {project.urgency}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#f0d080] transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[12px] text-[#888] mb-3">
                    <span>📍</span> {project.location}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[11px] bg-[rgba(212,168,32,0.1)] text-[#d4a820] px-2.5 py-1 rounded-full border border-[rgba(212,168,32,0.2)]">
                      {project.specs}
                    </span>
                    <span className="text-[11px] bg-[rgba(255,255,255,0.05)] text-[#888] px-2.5 py-1 rounded-full">
                      {project.units}
                    </span>
                    {project.completionYear && (
                      <span className="text-[11px] bg-[rgba(255,255,255,0.05)] text-[#888] px-2.5 py-1 rounded-full">
                        📅 {project.completionYear}
                      </span>
                    )}
                  </div>

                  <p className="text-[13px] text-[#777] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/919876543210?text=Hi! I'm interested in ${project.name}. Please share details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold flex-1 text-center text-[11px] py-2.5 inline-block"
                    >
                      Know More
                    </a>
                    <button
                      onClick={() => setModalProject(project.name)}
                      className="btn-outline-gold flex-1 text-[11px] py-2.5"
                    >
                      Request Site Visit
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Site visit modal */}
      {modalProject && (
        <SiteVisitModal
          projectName={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
