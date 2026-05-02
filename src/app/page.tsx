'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports for code splitting
const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false });
const Navbar = dynamic(() => import('@/components/sections/Navbar'));
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection'));
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const Footer = dynamic(() => import('@/components/sections/Footer'));
const FloatingActions = dynamic(() => import('@/components/ui/FloatingActions'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <main className="relative">
          <Navbar />
          <HeroSection />
          <WhyUsSection />
          <ProjectsSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <FloatingActions />
        </main>
      )}
    </>
  );
}
