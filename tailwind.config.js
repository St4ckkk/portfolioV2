/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '53': 'repeat(53, minmax(0, 1fr))',
        '26': 'repeat(26, minmax(0, 1fr))',
      },
      colors: {
        github: {
          dark: {
            bg: '#212830',
            card: '#161b22',
            border: '#30363d',
            text: '#c9d1d9',
            muted: '#8b949e',
            link: '#58a6ff',
            hover: '#79c0ff'
          }
        }
      }
    },
  },
  plugins: [],
}
