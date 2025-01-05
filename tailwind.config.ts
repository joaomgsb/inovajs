import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3B82F6", 
          light: "#60A5FA",
          dark: "#2563EB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EC4899", 
          light: "#F472B6",
          dark: "#DB2777",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#8B5CF6", 
          light: "#A78BFA",
          dark: "#7C3AED",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981", 
          light: "#34D399",
          dark: "#059669",
        },
        background: {
          light: "#1F2937",
          DEFAULT: "#111827",
          dark: "#030712",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9CA3AF",
        },
        gradient: {
          primary: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
          secondary: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
          accent: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;