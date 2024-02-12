/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#130808',
        light: '#fbf1f1',
        primary: '#f2b56b',
        secondary: '#d9985f',
        tertiary: '#a97d57',
        leaf: '#d9cc8f',
        rose: '#f2d8ce',
        red: '#bf6e3f'
      },
      fontFamily: {
        sans: ['grotesk'],
        cn: ['grotesk-cn'],
        mono: ['Martian Mono Variable'],
        base: ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
        // ignorance: ['Universal-Ignorance', 'sans-serif'],
        // cracked: ['Cracked-Code', 'sans-serif'],
        // palanquin: ['PalanquinDark', 'sans-serif']
      }
    }
  },
  plugins: []
}
