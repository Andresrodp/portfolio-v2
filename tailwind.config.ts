import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-layout": "url('/images/background.webp')",
      },
      colors: {
        primary: "#460259",
        secondary: "#363740",
        tertiary: "#0540F2",
        blackFolio: "#212226",
        quaternary: "#05F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
