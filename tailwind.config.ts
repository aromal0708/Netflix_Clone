import { url } from "inspector";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-red':'#ff0000'
      },
      screens: {
        sm: '0px', // Mobile
        md: '768px', // Tablet
        lg: '1024px', // Laptop
      },
      backgroundImage:{
        'login-pattern':"url('/Assets/loginbg.jpg')",
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config;
