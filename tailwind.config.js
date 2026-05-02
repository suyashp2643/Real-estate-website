/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#f0d080',
          400: '#e8c44a',
          500: '#d4a820',
          600: '#b8901a',
          700: '#9a7614',
        },
        charcoal: {
          800: '#1a1a1a',
          900: '#0f0f0f',
          950: '#080808',
        },
        cream: {
          50: '#fdfaf4',
          100: '#f8f2e0',
          200: '#f0e4c0',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a820 0%, #f0d080 50%, #d4a820 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,0.95) 100%)',
      },
    },
  },
  plugins: [],
}
