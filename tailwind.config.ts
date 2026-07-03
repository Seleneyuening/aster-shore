import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      colors: {
        shore: {
          ink: "#091123",
          deep: "#101b3f",
          violet: "#51416e",
          mist: "#e6b6bd",
          coral: "#f08b69",
          foam: "#f4efe8"
        }
      },
      boxShadow: {
        glow: "0 18px 60px rgba(240, 139, 105, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
