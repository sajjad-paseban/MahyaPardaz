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
    "@/assets/fonts.scss",
    "@/node_modules/bootstrap/dist/css/bootstrap-grid.min.css",
    "@/node_modules/bootstrap/dist/css/bootstrap-utilities.min.css",
    "@/assets/global.scss",
  ],
  plugins:[
    {src: '@/plugins/sweetalert.js', mode: 'client'}
  ],
})
