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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				victory: {
					peach: 'hsl(var(--victory-peach))',
					gold: 'hsl(var(--victory-gold))',
					pink: 'hsl(var(--victory-pink))',
					cream: 'hsl(var(--victory-cream))',
					warm: 'hsl(var(--victory-warm))',
					primary: 'hsl(var(--victory-primary))',
					secondary: 'hsl(var(--victory-secondary))',
					accent: 'hsl(var(--victory-accent))'
				}
			},
			backgroundImage: {
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-sparkle': 'var(--gradient-sparkle)',
				'gradient-cozy': 'var(--gradient-cozy)'
			},
			boxShadow: {
				'gentle': 'var(--shadow-gentle)',
				'warm': 'var(--shadow-warm)'
			},
			fontFamily: {
				'cozy': ['Inter', 'system-ui', 'sans-serif'],
				'handwritten': ['Comic Neue', 'cursive'],
				'lavender-serif': ['Rosarivo', 'Georgia', 'serif'], // Lavender Toast headlines
				'lavender-body': ['Modernist', 'Inter', 'system-ui', 'sans-serif'], // Lavender Toast body
				'onboarding-title': ['Aref Ruqaa Ink', 'serif'], // Onboarding titles and headers
				'onboarding-body': ['Arima', 'sans-serif'] // Onboarding body text
			},
			borderRadius: {
				'cozy': '1.5rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' }
				},
				'cozy-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				// Lavender Toast specific animations
				'steam-rise': {
					'0%': { 
						opacity: '0.8', 
						transform: 'translateY(0px) scale(1)' 
					},
					'50%': { 
						opacity: '0.4', 
						transform: 'translateY(-20px) scale(1.1)' 
					},
					'100%': { 
						opacity: '0', 
						transform: 'translateY(-40px) scale(1.2)' 
					}
				},
				'kintsugi-glow': {
					'0%, 100%': { 
						filter: 'drop-shadow(0 0 2px hsl(45 85% 55% / 0.3))' 
					},
					'50%': { 
						filter: 'drop-shadow(0 0 8px hsl(45 85% 55% / 0.6))' 
					}
				},
				'page-turn': {
					'0%': { 
						transform: 'perspective(1000px) rotateY(0deg)',
						opacity: '1'
					},
					'50%': { 
						transform: 'perspective(1000px) rotateY(-90deg)',
						opacity: '0.7'
					},
					'100%': { 
						transform: 'perspective(1000px) rotateY(0deg)',
						opacity: '1'
					}
				},
				'gentle-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scale(1.02)',
						opacity: '0.9'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite',
				'cozy-float': 'cozy-float 3s ease-in-out infinite',
				// Lavender Toast animations
				'steam-rise': 'steam-rise 2s ease-out infinite',
				'kintsugi-glow': 'kintsugi-glow 3s ease-in-out infinite',
				'page-turn': 'page-turn 0.6s ease-in-out',
				'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
