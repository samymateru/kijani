import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: "class",
	content: [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		transitionTimingFunction: {
        fancy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // example of a fancy easing
      	},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
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
			brand: {
				DEFAULT: 'hsl(var(--brand))',
				foreground: 'hsl(var(--brand-foreground))'
			},
			highlight: {
				DEFAULT: 'hsl(var(--highlight))',
				foreground: 'hsl(var(--highlight-foreground))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		boxShadow: {
        neumorphism: '12px 12px 50px #242424FF, -12px -12px 50px #ffffff',
        'neumorphism-inset': 'inset 8px 8px 15px #bebebe, inset -8px -8px 15px #ffffff',
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
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		},
		fontFamily: {
			heading: [
				'var(--font-heading)',
				'ui-sans-serif',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI Variable Display',
				'Segoe UI',
				'Helvetica',
				'Apple Color Emoji',
				'Arial',
				'sans-serif',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			],
			mono: [
				'var(--font-mono)',
				...defaultTheme.fontFamily.mono
			],
			sans: [
				'var(--font-sans)',
				'ui-sans-serif',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI Variable Display',
				'Segoe UI',
				'Helvetica',
				'Apple Color Emoji',
				'Arial',
				'sans-serif',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			]
		},
		screens: {
			'main-hover': {
				raw: '(hover: hover)'
			}
		}
	}
  },
	plugins: [
		tailwindcssAnimate,
		plugin(function({ addUtilities }) {
			addUtilities({
				".font-table": {
					fontFamily: 'Helvetica, "Arial", sans-serif',
					fontSize: "14px",
				},
				".font-hel-heading": {
					fontFamily: 'Helvetica, "Arial", sans-serif',
					fontWeight: "520",
					fontSize: "15px",
				},
				".font-hel-heading-bold": {
					fontFamily: 'Helvetica, "Arial", sans-serif',
					fontWeight: "700",
					fontSize: "18px",
				},
				".pop-bg": {
					backgroundColor: '#334155',
					color: "#d4d4d4"
				},
				".font-helvetica-13":{
					fontFamily: 'Helvetica',
					fontWeight: "700",
					fontSize: "13px"
				},
				".font-helvetica-14":{
					fontFamily: 'Helvetica',
					fontWeight: "700",
					fontSize: "14px"
				},
				".font-helvetica-medium":{
					fontFamily: 'Helvetica',
					fontWeight: "750",
					fontSize: "16px"
				},
				".font-helvetica-table-13":{
					fontFamily: 'Helvetica',
					fontWeight: "700",
					fontSize: "13px"
				},
				".font-helvetica-table-14":{
					fontFamily: 'Helvetica',
					fontWeight: "700",
					fontSize: "13px"
				},
				".font-helvetica-input-13":{
					fontFamily: 'Helvetica',
					fontWeight: "650",
					fontSize: "13px",
					borderColor: "rgb(115 115 115 / var(--tw-border-opacity, 1))"
				},
				".font-helvetica-large":{
					fontFamily: 'Helvetica',
					fontWeight: "700",
					fontSize: "18px",
				},
				".action":{
					backgroundColor: "black",
					color: "white"
				}, 
				".text-editor-action":{
					backgroundColor: "#334155",
					color: "white"
				},
				".table-header-color":{
					backgroundColor: "#171717",
					color: "#f59e0b"
				},
				".table-container":{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					padding: "8px",
					borderRadius: "calc(var(--radius) - 2px)",
					borderWidth: "1px",
					borderColor: "black",
					backgroundColor: "#e5e5e5"
				}    		
			});
		}),
	],
};
export default config;
