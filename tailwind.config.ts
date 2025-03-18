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
				hotel: {
					cream: '#F8F5F1',
					beige: '#E8E0D4',
					sand: '#D0C3B4',
					taupe: '#A69B8D',
					navy: '#2C3E50',
					gold: '#D4AF37',
				},
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
				}
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)' 
					},
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)' 
					},
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)' 
					},
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)' 
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'rotate-in': {
					'0%': {
						opacity: '0',
						transform: 'rotate(-5deg) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'rotate(0) scale(1)'
					}
				},
				'3d-flip': {
					'0%': {
						opacity: '0',
						transform: 'rotateY(-20deg) rotateX(5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'rotateY(0) rotateX(0)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'60%': {
						opacity: '1',
						transform: 'translateY(-10px)'
					},
					'80%': {
						transform: 'translateY(5px)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				'float-3d': {
					'0%, 100%': { 
						transform: 'translateY(0) translateZ(0) rotateX(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-5px) translateZ(5px) rotateX(2deg)'
					},
					'75%': {
						transform: 'translateY(5px) translateZ(-5px) rotateX(-2deg)'
					}
				},
				'rotate-3d': {
					'0%': {
						transform: 'rotateY(0deg) rotateX(0deg) scale(1)'
					},
					'50%': {
						transform: 'rotateY(10deg) rotateX(5deg) scale(1.05)'
					},
					'100%': {
						transform: 'rotateY(0deg) rotateX(0deg) scale(1)'
					}
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)' 
					},
				},
				'tilt-shine': {
					'0%': {
						boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
					},
					'50%': {
						boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.2)'
					},
					'100%': {
						boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'rotate-in': 'rotate-in 0.7s ease-out',
				'3d-flip': '3d-flip 0.8s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 8s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'tilt-shine': 'tilt-shine 5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
