import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  compatibilityDate: '2025-05-15',
  ssr: false,

  // app
  app: {
    head: {
      title: 'Vivi Cap',
      titleTemplate: '%s - Vivi Cap',

      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.svg' }],
    },
  },

  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@nuxt/image'],

  googleFonts: {
    families: {
      Jost: {
        wght: [400, 700],
        ital: [400],
      },
    },
    display: 'swap',
    preload: true,
    download: false,
    inject: true,
  },

  devtools: { enabled: false },

  // css
  css: ['~/assets/styles/fonts.scss', '~/assets/styles/main.scss'],

  // vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/styles/utils/index" as *;
          `,
        },
      },
    },
  },
});
