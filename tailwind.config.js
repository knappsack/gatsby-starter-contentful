module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // The classes are passed dynamically by Contentful -- don't purge them just because they're not used in the codebase
  safelist: [
    'self-auto',
    'self-start',
    'self-end',
    'self-center',
    'text-left',
    'text-center',
    'text-right',
    'lg:text-left',
    'lg:text-center',
    'lg:text-right',
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
  ],
  theme: {
    minHeight: {
      '25vh': '25vh',
      '50vh': '50vh',
      '75vh': '75vh',
      '100vh': '100vh',
      header: '72px',
      footer: '82px',
      // calc = 100vh - (header + footer)px
      main: 'calc(100vh - 154px)',
    },
    extend: {
      colors: {
        brand: {
          default: '#00E2B1',
          primary: '#1d1d1f',
          highlight: '#f5f5f7',
        },
      },
      fontSize: {
        xxs: '.6rem',
      },
      gridTemplateColumns: {
        ['auto-1fr']: 'auto 1fr',
        ['1fr-auto']: '1fr auto',
        blog: '2fr 1fr',
      },
      transitionProperty: {
        left: 'left',
      },
      inset: {
        hash: '-1em',
      },
      zIndex: {
        nav: '999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
