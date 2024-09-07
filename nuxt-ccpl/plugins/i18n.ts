import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'
import fr from '../lang/fr.js'
import nl from '../lang/nl.js'
import en from '../lang/en.js'

export default defineNuxtPlugin(nuxtApp => {
  const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: { fr, nl, en }
  })

  nuxtApp.vueApp.use(i18n)
})
