import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import Roll from './rollup.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      // input:'src/main.js',
      //  output:{
      //    dir:'public/build',
       //   format:'iife',

      //   name:'app',
      //   // file:'public/build/bundle.js'

      // }
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },

})
