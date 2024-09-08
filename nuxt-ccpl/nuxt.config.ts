import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: [
    '@/assets/app.css'
  ],
  plugins: [
    './plugins/i18n.ts' // Assurez-vous que le chemin est correct
  ],

  ssr: true,

  // Configuration pour la génération statique
  app: {
    head: {
      title: 'Comprendre et Parler',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
      link: [
        { rel: 'icon', href: '/img/logonew.2600a878.png' },
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/msf6xgq.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { href: 'https://fonts.googleapis.com/css2?family=Nerko+One&family=Rubik:ital,wght@0,300..900;1,300..900&family=Varela+Round&display=swap', rel: 'stylesheet' }
      ],
      script: [
        { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', defer: true },
        { 
          innerHTML: `document.addEventListener('DOMContentLoaded', function () {
            AOS.init();
          });`,
          type: 'text/javascript',
          defer: true
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  }
})
