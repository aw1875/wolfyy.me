module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          // Dark Scheme
          'dark-background': '#333333',
          'dark-secondary': '#272727',
          'dark-dashboard': '#4C4B47',
          'dark-btn': '#D9BB7B',
          'dark-discord': '#D29E65',
          'dark-action': '#81725B',
  
          // Light Scheme
          'light-background': '#E7E7E7',
          'light-dashboard': '#F5F2ED',
          'light-btn': '#EFDD9F',
          'light-discord': '#D9BB7B',
          'light-action': '#A1927F'
        },
        spacing: {
          'about': '35rem'
        },
        fontSize: {
            'header': ['7rem', {
                letterSpacing: '2px',
                lineHeight: '1.2',
            }],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  