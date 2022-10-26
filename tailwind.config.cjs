/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'mapa': "url('/mockup1.webp')",
        'trasy': "url('/mockup2.webp')",
        'archiv': "url('/mockup3.webp')",
      }
    },
  },
  plugins: [],
}
