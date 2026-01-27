import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      plugins: [tailwindcssAnimate],
    },
  },
};

export default config;
