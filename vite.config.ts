import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: 'https://joehunter.dev/chord-finder/',
  plugins: [react()],
})

git rm --cached vite.config.ts