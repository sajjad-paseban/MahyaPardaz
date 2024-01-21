<script>
    import { useBaseStore } from '~/store'
    import HeaderMenu from '../header/HeaderMenu.vue' 
    import Logo from '../header/Logo.vue'
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        name: 'HeaderModule',
        components: {
            HeaderMenu,
            Logo
        },
        data(){
            return {
                transparent: true,
                seo_title: null
            }
        },
        beforeMount(){
            const baseStore = useBaseStore()
            this.seo_title = baseStore.baseInfo?.seo_title
        },
        mounted() {
            window.addEventListener('scroll', () => {
                if(window.scrollY > 0)
                    this.transparent = false
                else
                    this.transparent = true
            });
        },
    })
</script>

<template>
    <header class="header-top" :class="[transparent ? 'transparent' : '']">
        <HeaderMenu :transparent="transparent"/>
        <Logo :transparent="transparent" logo-src="https://mahyapardaz.com/MahyaPardazYazd.png" :title="seo_title" />
    </header>
</template>

<style lang="scss" scoped>
    .header-top{
        @media screen and (min-width: 950px) {
            &.transparent{
                background-color: transparent;
                box-shadow: none;
            }
        }
        background-color:#ffffff;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 28px 0px;
        min-height: 80px;
        display: flex;
        padding: 0 14%;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 20;
    }

    @media screen and (max-width: 1224px) {
        .header-top{
            padding: 0 5%;
        }
    }
</style>