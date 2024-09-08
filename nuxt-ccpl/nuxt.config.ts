import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: [
    '@/assets/app.css',
    'vue3-carousel/dist/carousel.css'
  ],

  plugins: [
    './plugins/i18n.ts' // Assurez-vous que le chemin est correct
  ],

  build:
  {transpile: ['vue3-carousel']},

 

  ssr: true,

  // Configuration pour la génération statique
  app: {
    head: {
      title: 'Comprendre et Parler',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { hid: 'og:url', property: 'og:url', content: 'https://centrecomprendreetparler.vercel.app/' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Accueil | CCP asbl' },
      { hid: 'og:description', property: 'og:description', content: 'Bienvenue sur le site du Centre Comprendre et Parler ASBL (CCP), une organisation dédiée à l\'accompagnement des enfants sourds et malentendants. Découvrez nos services, nos programmes de soutien et nos initiatives pour améliorer la qualité de vie de nos patients.' },
      { hid: 'og:image', property: 'og:image', content: 'https://centrecomprendreetparler.vercel.app/public/images/opengraph.png' },

      // Twitter meta tags
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:domain', property: 'twitter:domain', content: 'centrecomprendreetparler.vercel.app' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://centrecomprendreetparler.vercel.app/' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Accueil | CCP asbl' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Bienvenue sur le site du Centre Comprendre et Parler ASBL (CCP), une organisation dédiée à l\'accompagnement des enfants sourds et malentendants. Découvrez nos services, nos programmes de soutien et nos initiatives pour améliorer la qualité de vie de nos patients.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://centrecomprendreetparler.vercel.app/public/images/opengraph.png' }
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
  },

  modules: ['vue3-carousel-nuxt']
})