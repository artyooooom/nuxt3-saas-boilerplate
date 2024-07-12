// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: 'https://unpkg.com/flowbite@1.4.1/dist/flowbite.js' }],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@nuxtjs/seo"
  ],
  supabase: { redirect: false },
  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { isr: true },
  },
  site: {
    url: 'https://nuxt3-saas-boilerplate.vercel.app/',
    name: 'Nuxt 3 Boilerplate',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ]
  }
})