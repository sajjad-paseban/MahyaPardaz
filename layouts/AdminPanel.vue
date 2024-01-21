<script>
import Header from '@/modules/admin/header/Component.vue'
import SideBar from '@/modules/admin/side-bar/Component.vue'
export default defineComponent({
    name: 'AdminPanelLayout',
    components: {
        Header,
        SideBar
    },
    data(){
        return {
            showLoading: true,
            showSideBar: false
        }
    },
    beforeCreate(){
        useHead({
            title: 'پنل مدیریت محیا پرداز یزد'
        })
    },
    methods: {
        getShowSideBarStatus(val){
            this.showSideBar = val
        }
    },
    mounted(){
        setTimeout(()=>{
            this.showLoading = false
        },3000)
    }
})
</script>

<template>
    <div class="admin-panel-layout">
        <Header @showSideBar="getShowSideBarStatus" />
        <section>
            <div class="cover" :class="{show:showSideBar}"></div>
            <main>
                <slot />
            </main>
            <div class="side-bar" :class="{show:showSideBar}">
                <SideBar />
            </div>
        </section>
        <Loading v-if="showLoading" />
    </div>
</template>

<style lang="scss" scoped>

    $side-bar-size: 250px;

    .admin-panel-layout{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden auto;
        background-color: #e5e7eb;
    }
    
    section{
        position: fixed;
        top: 71px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .cover{
        position: absolute;
        z-index: 3;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba($color: #000000, $alpha: 0.5);
        display: none;
    }
    main{
        width: calc(100% - $side-bar-size);
        padding: 5px 0;
        overflow-y: auto !important;
        height: calc(100% - 10px);
        &::-webkit-scrollbar {
        width: 8px;
      }
      
        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        
        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #3B566E; 
        border-radius: 5px;
        }
        
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        }
    }

    .side-bar{
        width: $side-bar-size;
        position: absolute;
        z-index: 4;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        transition: right 300ms;
    }

    @media screen and (max-width: 1200px) {

        main{
            width: 100%;
        }
        .cover{
            &.show{
                display: block;
            }
        }
        .side-bar{
            right: -($side-bar-size);
            &.show{
                right: 0 !important;
            }
        }
    }
</style>