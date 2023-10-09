/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'App-bg': "url('/public/bg.png')",
      },
      minHeight: {
        '1/2': '50vh',
        '80': '80vh',
        '40': '40vh',
        '30': '30vh',
      },
      colors: {
        'grey': 'rgba(255, 255, 255, 0.685)',
        'features': 'rgb(121,168,247)',
        'joinus-blue': '#4385F3',
        'joinus-grey': 'rgba(255, 255, 255, 0.3)',
        'footer': '#D3D3D3',
      },
      backdropBlur: {
        '10': '10px',
      },
      fontSize: {
        'faq': '2em',
        'joinus-font': '1.2rem',
        'joinuswel': '2.3rem',
        'joinuswel-p': '1.3rem',
      },
      padding: {
        'features': '2rem 0rem',
        'joinus': '.8rem 2rem',
        'joinus2': '3rem 0rem',
      },
      width: {
        'features': '300px',
        'community': '90%',
        'joinuswel': '70%',
        'fullcircle': '220px',
        'half': '150px',
      },
      height: {
        'joinus': '70vh',
        'joinus2': '40vh',
        'scrolling': '300px',
        'fullcircle': '220px',
        'half': '150px',
      },
      borderRadius: {
        'joinus-left': '100%',
        'joinus-right': '100%',
        'scrolling': '50%',
      },
      boxShadow: {
        'joinus': '0 -4px 10px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        '999': '999',
      },
      margin: {
        'scrolling-bottom': '-40px',
        'scrolling-right': '-40px',
        'left-right': '-80px',
        'left-bottom': '-75px',
        'right-bottom': '110px',
        'right-right': '-335px',
        'h1': '0.67em',
        'p': '1em',
        'button': '0em',
      },
      transitionDuration: {
        '0.3': '0.3s',
      },
    },
  },
  plugins: [
  ],
}

