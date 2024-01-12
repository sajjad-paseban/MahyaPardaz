<script lang="ts">

    import Header from '@/modules/header/Component.vue'
    import Footer from '@/modules/footer/Component.vue'
    import { base_info } from '@/services/index.service'
    import { get_clinet_url, messages, setBaseInfo } from '@/helpers/function'
    import { ToastMessage } from '@/helpers/enum'

    
    export default defineComponent({
        name: 'PageLayout',
        async setup(){
            const res = await base_info().then(res => res)
            if(!(res && res.status == 200))
                messages(ToastMessage.ServerError)
                        
            return {
                base_info: res.data.entities.base_info
            }
        },
        data(){
            return {
                keywords: ''
            }
        },
        components: {
            Header,
            Footer
        },
        beforeCreate(){
            this.base_info.keywords.map((value: any, index: any)=>{
                this.keywords +=  value.title + ','
            })

            useHead({
                titleTemplate: '%s - ' + this.base_info.seo_title,
                meta: [
                {
                    name: 'description',
                    content: this.base_info.seo_description
                },
                {
                    name: 'keywords',
                    content: this.keywords
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
            setBaseInfo(this.base_info)
        },
    })
</script>

<template>
    <Header />
    <slot />
    <Footer />
</template>