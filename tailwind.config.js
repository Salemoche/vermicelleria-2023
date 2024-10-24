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
              '2xl': '1.75rem',
              '3xl': '3.5rem',
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
    safelist: [
      'basis-[50%]',
      'basis-[100%]',
      'text-xl',
      'h-[60%]',
      'h-[70%]',
      'h-[80%]',
      'h-[90%]',
      'h-[100%]',
      'mb-8',
      'mb-2',
      'lg:mb-20',
      'lg:mb-4',
      'col-span-12',
      'col-span-6',
      'lg:col-span-6',
      'lg:col-span-12',
      'only:lg:col-start-4',
    ],
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      // ...
    ],
  }
  