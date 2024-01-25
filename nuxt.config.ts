import { resolve } from 'path'
import axios from 'axios'
import { get_blogs } from './services/blog.service'
import { api_base_url } from './helpers/function'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  alias:{
    "@": resolve(__dirname) + '/'
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  app: {
    head: {
      meta: [ // Each object in this array is its own meta tag
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial scale=1' },
        { name: 'robots', content: 'index, follow'},
        { "http-equiv": 'x-ua-compatible' , content: 'ie=edge' },
        { property: 'og:locale', content: 'fa_IR' },
        { property: 'og:type', content: 'website' },
        { name: 'author', content: 'شرکت مهندسی محیا پرداز' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'شرکت مهندسی محیا پرداز' },
      ],
      link: [
        {rel: 'icon' , href: "/MahyaPardazYazd.png"},
      ],
      script: [
        { src: '/tinymce/tinymce.min.js' },
        { src: '/bootstrap/bootstrap.min.js' }
      ]
    },
  },
  css: [
    "@/assets/fonts.scss",
    "@/assets/buttons.scss",
    "@/node_modules/bootstrap/dist/css/bootstrap-grid.min.css",
    "@/node_modules/bootstrap/dist/css/bootstrap-utilities.min.css",
    "@/node_modules/bootstrap/dist/css/bootstrap.css",
    "@/assets/global.scss",
  ],
  
  plugins:[
    {src: '@/plugins/sweetalert.js', mode: 'client'},
  ],
})
