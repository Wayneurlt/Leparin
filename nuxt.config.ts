// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "notivue/nuxt",
    "@pinia/nuxt",
    "@prisma/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "nuxt-auth-utils",
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "notivue/notification.css",
    "notivue/animations.css",
  ],
  icon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    },
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  runtimeConfig: {
    oauth: {
      google: {
        clientId: "",
        clientSecret: "",
        redirectURL: process.env.GOOGLE_REDIRECT_URL,
      },
      facebook: {
        clientId: "",
        clientSecret: "",
      },
    },
    environment: process.env.ENVIROMENT,
  },
  app: {
    head: {
      title: "RepuPro - Professional Online Reputation Management Services",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { name: "description", content: "Professional online reputation management and review services. Help businesses improve their online presence with positive reviews, SEO, and reputation services. 12+ years experience." },
        { name: "keywords", content: "online reputation management, review services, SEO services, business reviews, reputation repair, local SEO, directory reviews" },
        { name: "author", content: "RepuPro" },
        { property: "og:title", content: "RepuPro - Professional Online Reputation Management Services" },
        { property: "og:description", content: "Professional online reputation management and review services. Help businesses improve their online presence with positive reviews, SEO, and reputation services." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://repupro.com" },
        { property: "og:image", content: "https://repupro.com/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "RepuPro - Professional Online Reputation Management Services" },
        { name: "twitter:description", content: "Professional online reputation management and review services. Help businesses improve their online presence." },
        { name: "twitter:image", content: "https://repupro.com/twitter-image.jpg" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://repupro.com" },
      ],
    },
  },
  vite: {
    server: {
      allowedHosts: ["958d-105-160-105-173.ngrok-free.app"],
    },
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },
  notivue: {
    limit: 3,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 5000,
      },
    },
  },
});
