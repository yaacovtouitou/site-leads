import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB',
        primary: '#059669',
        secondary: '#1E40AF',
        'hm-blue': '#0B1E3D',
        'hm-yellow': '#FBBF24',
        'hm-gray': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      minHeight: {
        'touch': '48px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
