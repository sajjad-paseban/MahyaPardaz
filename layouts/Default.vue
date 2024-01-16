<script setup>

    import Header from '../modules/header/Component.vue'
    import Footer from '../modules/footer/Component.vue'
    import HeaderBanner from '../modules/header-banner/Component.vue'
    
    import { base_info } from '@/services/index.service'
    import { get_clinet_url, messages } from '~/helpers/function'
    import { ToastMessage } from '~/helpers/enum'
    import { useBaseStore } from '~/store'

    const router = useRouter()
    const keywords = ref([])
    const res = await base_info().then(res => res)

    if(res && res.status == 200){
        
        res.data.entities.base_info.keywords.map((value, index)=>{
            keywords.value.push(value.title)
        })
        
        useHead({
            titleTemplate: '%s - ' + res.data.entities.base_info.seo_title,
            meta: [
                {
                    name: 'description',
                    content: res.data.entities.base_info.seo_description
                },
                {
                    name: 'keywords',
                    content: keywords.value.join(',')
                },
                {
                    property: 'og:title',
                    content: '%s - ' + res.data.entities.base_info.seo_title
                },
                {
                    property: 'og:description',
                    content: res.data.entities.base_info.seo_description
                },
                {
                    property: 'og:url',
                    content: get_clinet_url() 
                },
                {
                    property: 'og:site:name',
                    content: res.data.entities.base_info.seo_title
                },
                {
                    property: 'og:image',
                    content: get_clinet_url('MahyaPardazYazd.png')
                }

            ]
        })
    }else{
        messages(ToastMessage.ServerError)
    }
    
    onBeforeMount(()=>{
        const baseStore = useBaseStore()
        baseStore.setBaseInfo(res.data.entities.base_info)
    })

</script>

<template>
    <Header />
    <HeaderBanner />
    <section class="main-section">
        <slot /> 
    </section>
    <footer class="footer-section">
        <Footer />
    </footer>
</template>

<style lang="scss" scoped>
    .main-section{
        position: relative;
        top: 640px;
    }
    .footer-section{
        position: relative;
        top: 640px;
    }
</style>
