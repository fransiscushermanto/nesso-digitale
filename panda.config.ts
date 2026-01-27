import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        zIndex: {
          header: { value: "100" },
          bg: { value: "-1" },
        },
        colors: {
          primary: { value: "#0B5ED7" },
        },
      },
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
