import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
export default defineConfig({
    build: {
        sourcemap: false // Or 'hidden' for production
    },
    plugins: [
        react(),
        svgr(),
        tsconfigPaths()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            app: path.resolve(__dirname, './src/app'),
        },
    },
    css: {
        postcss: {
            plugins: [require('tailwindcss')({config: './tailwind.config.js'}), require('autoprefixer')]
        }
    },
    optimizeDeps: {
        include: ['tailwindcss-dir']
    },
    server: {
        port: 3000,
        open: true
    }
})
