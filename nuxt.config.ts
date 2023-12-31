import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    "@": resolve(__dirname) + '/'
  },
  app: {
    head: {
      link: [
        {rel: 'icon' , href: "/MahyaPardazYazd.png"},
      ]
    }
  },
  css: [
    "@/assets/global.scss",
    "@/assets/fonts.scss"
  ]
})
