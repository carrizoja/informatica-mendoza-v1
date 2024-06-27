import type { Config } from "tailwindcss";

const { addDynamicIconSelectors } = require('@iconify/tailwind');
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [addDynamicIconSelectors(),
  ],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '640px' } },
    },
  },

};



export default config;
