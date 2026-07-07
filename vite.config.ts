import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import compression from 'vite-plugin-compression2'

// LV CRITICAL — without resolve.dedupe + index.css @source the site renders
// blank white in production once shared/ components are consumed (useContext
// returns null because React is bundled twice — once for site code and once
// for shared/). See memory/lv_critical_react_dedupe.md.
export default defineConfig({
  plugins: [react(), tailwindcss(), compression({ algorithms: ['brotliCompress'], threshold: 1024 })],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'react-vendor'
            if (/[\\/]node_modules[\\/]lucide-react/.test(id)) return 'ui-vendor'
          }
          return undefined
        },
      },
    },
  },
})
