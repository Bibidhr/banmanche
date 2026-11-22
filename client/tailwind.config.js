/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict 3-color palette for BANMANCHE:
        // 1. Terracotta / Himalayan Amber Ochre (Accent / Flame / Spices)
        ochre: {
          50: '#FDF7F2',
          100: '#FAEFE6',
          200: '#F5DDCE',
          300: '#EABFA6',
          400: '#DF9978',
          500: '#E07A5F', // Primary Ember
          600: '#D46344',
          700: '#B84E31',
          800: '#923D26',
          900: '#753220',
        },
        // 2. Obsidian Slate / Mountain Shadow (Deep Courtyard Stone & Timber)
        obsidian: {
          950: '#0B0F11', // Deepest background
          900: '#111618', // Primary dark canvas
          850: '#151D20', // Card surfaces
          800: '#1B2529', // Card hover / border high
          700: '#2A373D', // Borders and dividers
          600: '#41525A', // Muted slate text
          500: '#647A85',
        },
        // 3. Himalayan Sand Cream / Warm Birch (High readability stone & parchment)
        sand: {
          50: '#FFFFFF',
          100: '#FBF8F4',
          200: '#F5EFE6', // Light parchment
          300: '#E7DEC9', // Soft warm tone
          400: '#CEBEA3', // Muted warm accents
          500: '#AFA086',
        },
        // 4. Himalayan Midnight Blue (Rich deep navy for alternating dark sections)
        midnight: {
          950: '#070D14', // Deepest night blue
          900: '#0A131F', // Section dark blue background
          850: '#0F1D2E', // Dark blue card surface
          800: '#15253B', // Border / subtle highlight
          700: '#1E3553',
        },
        // 5. Deep Petrol Slate Blue (From Piccolino Fine-Dining Inspiration)
        petrol: {
          950: '#0A1821', // Deepest background tone
          900: '#0E2433', // Primary deep petrol canvas
          850: '#132B3A', // Card surface / triptych background
          800: '#1A374A', // Borders & hover highlights
          700: '#234B62',
        },
        // 6. Authentic BANMANCHE Logo Terracotta Red-Orange
        terracotta: {
          50: '#FDF6F3',
          100: '#FBEDE7',
          200: '#F7D7CB',
          300: '#F2B7A2',
          400: '#F27A50',
          500: '#ED5E2D', // Exact Logo Color (#ED5E2D)
          600: '#DB4E1E',
          700: '#B83E15',
          800: '#943212',
          900: '#7A2A10',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        menu: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        garamond: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-hover': '0 12px 40px 0 rgba(224, 122, 95, 0.25)',
        'glow': '0 0 25px -5px rgba(224, 122, 95, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
