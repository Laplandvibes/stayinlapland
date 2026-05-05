import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// LV CRITICAL — without resolve.dedupe + index.css @source the site renders
// blank white in production once shared/ components are consumed (useContext
// returns null because React is bundled twice — once for site code and once
// for shared/). See memory/lv_critical_react_dedupe.md.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
})
