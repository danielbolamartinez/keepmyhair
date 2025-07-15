import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '$': '/src'  // atención: esto funciona si la ruta está bien en tu sistema y entorno
    }
  },
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'pwa-192x192.png', 'pwa-512x512.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\.(js|css|html|png|svg|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'offline-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          },
          {
            urlPattern: /^\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages'
            }
          }
        ]
      },
      manifest: {
        name: 'Keep my hair - Adiós Tricotilomania',
        short_name: 'KeepMyHair',
        description: 'Una pequeña app para ayudar a aquellos que sufren de tricotilomanía a eliminar esos momentos de quitarse pelos',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
