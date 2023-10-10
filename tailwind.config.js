/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontSize: {
            'sm': '1rem',
            'lg': '1.5rem',
            'xl': '1.875rem',
        },
        fontFamily: {
            special: ['var(--font-special)', 'sans-serif'],
            regular: ['var(--font-regular)', 'sans-serif']
        },
        screens: {
            'xs': '414px',
        },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
