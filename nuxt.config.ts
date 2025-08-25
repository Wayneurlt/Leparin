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
      title: "FantasyWorld - Premium Adult Toys & Pleasure Products",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { name: "description", content: "Premium adult toys and pleasure products. Discreet shipping, body-safe materials. WhatsApp: +254 702 943 693" },
        { name: "keywords", content: "adult toys, pleasure products, vibrators, dildos, couples toys, Kenya" },
        { name: "author", content: "FantasyWorld" },
        { property: "og:title", content: "FantasyWorld - Premium Adult Toys & Pleasure Products" },
        { property: "og:description", content: "Premium adult toys and pleasure products. Discreet shipping, body-safe materials." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "FantasyWorld - Premium Adult Toys & Pleasure Products" },
        { name: "twitter:description", content: "Premium adult toys and pleasure products. Discreet shipping, body-safe materials." },
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
