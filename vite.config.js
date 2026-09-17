import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFile } from 'node:fs/promises'
import { generateSitemap } from './scripts/sitemap.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'site-sitemap',
      apply: 'build',
      async closeBundle() {
        await generateSitemap('https://www.josephmoran.org')
        await copyFile('staticwebapp.config.json', 'dist/staticwebapp.config.json')
      },
    },
  ],
})
