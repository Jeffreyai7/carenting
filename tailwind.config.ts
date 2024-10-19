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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
    "footerground-image": 'url("/assets/svg/arch.svg")',
    "background": 'url("/assets/images/jj-ying-7JX0-bfiuxQ-unsplash.jpg")',
    "artwork": 'url("/assets/images/artwork.aa0923d3.png")',
    "hero": 'url("/assets/images/artwork3.png")',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"]
  }
};
export default config;



