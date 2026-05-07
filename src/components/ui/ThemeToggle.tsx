'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        position: 'relative',
        width: '56px',
        height: '28px',
        borderRadius: '999px',
        border: '1px solid rgba(212,168,32,0.3)',
        background: isDark
          ? 'linear-gradient(to right, #1a1a2e, #16213e)'
          : 'linear-gradient(to right, #fdf6e3, #fce4a0)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <motion.div
        animate={{ x: isDark ? 0 : 26 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: isDark
            ? 'linear-gradient(135deg, #d4a820, #f0d080)'
            : 'linear-gradient(135deg, #f59e0b, #fcd34d)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
        }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
}
