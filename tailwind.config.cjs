module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#4B2E2E'
        },
        cream: '#F5EFE6',
        gold: '#C8A951',
        burgundy: '#7A1720'
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
