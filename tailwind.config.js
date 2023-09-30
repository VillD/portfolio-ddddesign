/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        emptiness: '#fbfefdff',
        goldenLion: {
          200: '#f5ebd7ff',
          400: '#eecf68ff',
        },
        blackOut: '#222222ff',
        panPurple: {
          200: '#8a9aeaff',
          400: '#6c80e5ff',
        },
        mellowMelon: '#f31f5cff',
      },
      dropShadow: {
        textSm: '-4px 2px 0 #222222',
        textLg: '-6px 4px 0 #222222',
      },
      boxShadow: {
        header: '0px 4px 0 2px #252027',
        boxImage: '12px 12px 0 4px #252027',
        buttonsMain: '3px 3px 0 0 #252027',
        buttonsSocial: '0 2px 0 0 #252027',
        boxAbout: '4px 4px 0 0px #252027',
        boxSkills: '4px 4px 0 0 #252027',
        boxProjects: '6px 6px 0 0 #252027',
      },
      backgroundImage: {
        profile: "url('./src/assets/img/profile.png')",
      },
    },
  },
  plugins: [],
}
