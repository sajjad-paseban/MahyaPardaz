<script>
import { defineComponent } from 'vue';
import { ChevronLeftIcon } from '@heroicons/vue/16/solid'
import { breadcrumb as breeadcb, get_clinet_url } from '@/helpers/function'
export default defineComponent({
    name: 'PageBannerModule',
    props: ['title','image'],
    data(){
        return {
            routeParams: []
        }
    },  
    components: {
        ChevronLeftIcon
    },
    methods: {
        breadcrumb(item){
            return breeadcb(item)
        }
    },
    mounted: function(){
        const route = useRoute()
        this.routeParams = route.path.replace('/','').split('/')
    }
})
</script>

<template>
    <div class="page-banner" :style="{ backgroundImage: `url(${ image ? image : get_clinet_url()+'/_nuxt/assets/images/background/iot-city-2.jpg' })`}">
        <div class="page-layer"></div>
        <div class="page-main text-center">
            <h2>
                {{ title }}
            </h2>
            <div class="navigation">
                <nuxt-link to="/">
                    صفحه اصلی
                </nuxt-link>
                <div v-if="routeParams.length > 1" class="d-inline">
                    <div class="d-inline" v-for="(item, index) in routeParams" :key="index">
                        <ChevronLeftIcon class="h-3" style="width: 25px;position: relative;top: 12px;color: #fff;" />
                        <NuxtLink :to="'/'+routeParams.slice(0,index+1).join('/')">
                            {{ breadcrumb(decodeURI(item)) }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="d-inline" v-else>
                    <ChevronLeftIcon class="h-3" style="width: 25px;position: relative;top: 12px;color: #fff;" />
                    <span>
                        {{ title }}
                    </span>
                </div>
            </div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
    .page-banner{
        position: relative;
        // background-image: url('@/assets/images/background/page-banner2.jpg');
        background-size: cover;
        background-position: center center;
        min-height: 400px;

        .page-layer{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-image: linear-gradient(127deg, #384DFF 0%, #000404 91%);
            min-height: inherit;
            opacity: 0.8;
        }
        .page-main{
            position: relative;
            z-index: 1;
            padding-top: 135px;
            h2{
                color: #fff;
                font-family: 'vazir';
                font-size: 40px;
            }

            .navigation{
                font-family: 'yekan';
                direction: rtl;
                a{
                    color: #fff;
                    font-weight: bold;
                    font-size: 18px;
                }
                span{
                    color: #fff;
                    font-size: 18px;
                    margin-right: 4px;
                }
            }
        }
    }
</style>