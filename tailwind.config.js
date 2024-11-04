/** @type {import('tailwindcss').Config} */
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')
const plugin = require('tailwindcss/plugin')
const textBorder = plugin(
  function ({ matchUtilities, theme, config, e }) {
    const textBorderWidth = `--tw${config('prefix')}-text-border-width`
    const pos = `var(${textBorderWidth},4px)`
    const neg = `calc(var(${textBorderWidth}, 1px) * -1)`

    matchUtilities(
      {
        'text-border': (value) => ({
          'text-shadow': `
            ${pos} ${pos} 0 ${value},
            ${neg} ${neg} 0 ${value},
            ${pos} ${neg} 0 ${value},
            ${neg} ${pos} ${value};
          `,
        }),
      },
      {
        values: flattenColorPalette(theme('colors')),
        type: ['color', 'any'],
      }
    )

    matchUtilities(
      {
        'text-border': (value) => ({
          [textBorderWidth]: value
        }), 
      },
      { values: theme('borderWidth') }
    ) 
  },
)
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        space1: '#010b19',
        space2: '#FFC100',
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        montserrat: ["var(--font-montserrat)"],
        spacegrotesk: ["var(--font-space-grotesk)"],
      },

      screens: {
        'vm': '474px',
        'Edit' : '1366px',
        
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require("daisyui"),
    textBorder,
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  //...
}

