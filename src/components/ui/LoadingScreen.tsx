'use client';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Decorative rings */}
      <div className="absolute w-64 h-64 border border-[rgba(212,168,32,0.1)] rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute w-48 h-48 border border-[rgba(212,168,32,0.08)] rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <img
            src="/logo.png"
            alt="Jaybhadra Builders"
            className="h-20 w-auto object-contain"
          />
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-[#222] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#d4a820] to-[#f0d080]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
            onAnimationComplete={() => setTimeout(onComplete, 200)}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[11px] text-[#555] uppercase tracking-widest mt-4"
        >
          Building Dreams Since 2010
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
