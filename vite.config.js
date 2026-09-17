import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// A-Frame custom element names — tell React to treat them as native DOM elements
// so it doesn't warn about unknown components.
const AFRAME_ELEMENTS = [
  'a-scene', 'a-assets', 'a-sky', 'a-camera', 'a-cursor',
  'a-entity', 'a-light', 'a-box', 'a-sphere', 'a-plane',
  'a-cylinder', 'a-torus', 'a-circle', 'a-text', 'a-ring',
  'a-cone', 'a-triangle', 'a-image', 'a-video', 'a-sound',
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Tell React these are custom DOM elements (not React components)
      // so it passes props as HTML attributes rather than warning.
      template: {
        compilerOptions: {
          isCustomElement: (tag) => AFRAME_ELEMENTS.includes(tag),
        },
      },
    }),
  ],
})
