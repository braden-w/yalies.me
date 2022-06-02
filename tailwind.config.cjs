const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  safelist: [{ pattern: /bg-.+-.+/ }],

  theme: {
    extend: {},
  },

  daisyui: {
    darkTheme: 'yale',
    themes: [
      {
        yale: {
          primary: '#00356b',
          'primary-content': '#ffffff',
          secondary: '#7D919B',
          'secondary-content': '#ffffff',
          accent: '#63aaff',
          'accent-content': '#ffffff',
          neutral: '#191D24',
          'neutral-focus': '#111318',
          'neutral-content': '#A6ADBB',
          'base-100': '#2A303C',
          'base-200': '#242933',
          'base-300': '#20252E',
          'base-content': '#A6ADBB',
        },
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};

module.exports = config;
