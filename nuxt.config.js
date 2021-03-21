import vuetifyEn from './locales/en.js';
import vuetifyZhHant from './locales/zh.js';

export default {
  head: {
    titleTemplate: '%s - nuxt-vuetify-i18n',
    title: 'nuxt-vuetify-i18n',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {...vuetifyEn},
        zh: {...vuetifyZhHant}
      }
    }
  },
  vuetify: {
    optionsPath: './vuetify.options.js',
  },
  build: {},
  router: {
    // middleware: ['defaultLang', 'authenticated']
  }
}
