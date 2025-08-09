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
      fontFamily: {
        'aref-ruqaa': ['Aref Ruqaa Ink', 'serif'],
        'arima': ['Arima', 'cursive'],
        'caveat': ['Caveat', 'cursive'],
        'patrick-hand': ['Patrick Hand', 'cursive'],
        'handwritten': ['Comic Neue', 'cursive'],
        'cozy': ['Inter', 'sans-serif'],
        'onboarding-title': ['Aref Ruqaa Ink', 'serif'],
        'onboarding-body': ['Arima', 'cursive'],
        'lavender-header': ['Caveat', 'cursive'],
        'lavender-text': ['Patrick Hand', 'cursive'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "victory-primary": "hsl(var(--victory-primary))",
        "victory-secondary": "hsl(var(--victory-secondary))",
        "victory-accent": "hsl(var(--victory-accent))",
        "victory-gold": "hsl(var(--victory-gold))",
        "victory-pink": "hsl(var(--victory-pink))",
        "victory-peach": "hsl(var(--victory-peach))",
        "victory-warm": "hsl(var(--victory-warm))",
        "victory-cream": "hsl(var(--victory-cream))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        cozy: "1rem",
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
        "gentle-bounce": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-6px)" },
          "60%": { transform: "translateY(-3px)" },
        },
        "gentle-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        "sparkle": {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(360deg) scale(1.2)" },
        },
        "kintsugi-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 255, 0, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 255, 0, 0.7)" },
        },
        "page-turn": {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(20deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-bounce": "gentle-bounce 3s infinite",
        "gentle-pulse": "gentle-pulse 5s infinite",
        "sparkle": "sparkle 10s linear infinite",
        "kintsugi-glow": "kintsugi-glow 5s linear infinite",
        "page-turn": "page-turn 0.5s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
