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
    "@nuxtjs/seo",
    "nuxt-vercel-analytics"
  ],
  supabase: { redirect: false },
  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { isr: true },
  },
  // _*: define the SEO meta of the website
  site: {
    url: '/',
    name: '',
    description: '',
    defaultLocale: 'en',
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ]
  }
})