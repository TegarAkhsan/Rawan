import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    host: true,
  },

  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',

    // Warn if a single chunk exceeds 600kb
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // ── Manual chunk splitting: separates heavy deps into cacheable bundles ──
        manualChunks: {
          // React core — rarely changes, cached by browser
          'vendor-react': ['react', 'react-dom'],

          // Three.js + React Three Fiber — very large, isolate them
          'vendor-three': ['three'],
          'vendor-r3f': ['@react-three/fiber', '@react-three/drei'],

          // Leaflet map — only loaded when MAP view is opened
          'vendor-leaflet': ['leaflet', 'react-leaflet'],

          // Icons + confetti — small utilities
          'vendor-ui': ['lucide-react', 'canvas-confetti'],
        },

        // Fingerprinted file names for long-term caching
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Enable source maps only for staging/debug; set false for prod
    sourcemap: false,

    // Minify with esbuild (fast & efficient)
    minify: 'esbuild',
  },

  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'lucide-react',
      'leaflet',
      'react-leaflet',
      'canvas-confetti',
    ],
  },
});
