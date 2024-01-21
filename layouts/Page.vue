<script lang="ts">

    import Header from '@/modules/header/Component.vue'
    import Footer from '@/modules/footer/Component.vue'
    import { base_info } from '@/services/index.service'
    import { get_clinet_url, messages } from '@/helpers/function'
    import { ToastMessage } from '@/helpers/enum'
import { useBaseStore } from '~/store'

    
    export default defineComponent({
        name: 'PageLayout',
        async setup(){
            const res = await base_info().then(res => res)
            if(!(res && res.status == 200))
                messages(ToastMessage.ServerError)
                
                
            let keywords: any[] = []
            res.data.entities.base_info.keywords.map((value: any, index: any)=>{
                keywords.push(value.title)
            })
          
            return {
                keywords: keywords,
                base_info: res.data.entities.base_info
            }
        },
        components: {
            Header,
            Footer
        },
        data(){
            return {
                showLoading: true,
            }
        },
        beforeCreate(){
            
            useHead({
                titleTemplate: '%s - ' + this.base_info.seo_title,
                meta: [
                {
                    name: 'description',
                    content: this.base_info.seo_description
                },
                {
                    name: 'keywords',
                    content: this.keywords.join(',')
                },
                {
                    property: 'og:title',
                    content: '%s - ' + this.base_info.seo_title
                },
                {
                    property: 'og:description',
                    content: this.base_info.seo_description
                },
                {
                    property: 'og:url',
                    content: get_clinet_url() 
                },
                {
                    property: 'og:site:name',
                    content: this.base_info.seo_title
                },
                {
                    property: 'og:image',
                    content: get_clinet_url('MahyaPardazYazd.png')
                }

            ]
            })
        },
        beforeMount() {
            const baseStore = useBaseStore()
            baseStore.setBaseInfo(this.base_info)
        },
        mounted(){
            setTimeout(()=>{
                this.showLoading = false
            },1000)
        }
    })
</script>

<template>
    <Loading v-if="showLoading" />
    <Header />
    <slot />
    <Footer />
</template>