import path from 'node:path'
import {defineConfig} from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  plugins: [Vue()],
})
