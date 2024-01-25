<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import { api_base_url as apiBaseUrl } from '~/helpers/function';
    import BtnRound from '@/components/BtnRound.vue';

    export default defineComponent({
        name: 'client-section',
        components: {
            Carousel,
            Slide,
            BtnRound,
            Pagination,
            Navigation,
        },
        data(){
            return {
                api_base_url: apiBaseUrl(),
                settings: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                // breakpoints are mobile first
                // any settings not specified will fallback to the carousel settings
                breakpoints: {
                    // 700px and up
                    700: {
                        itemsToShow: 3.5,
                        snapAlign: 'center',
                    },
                    // 1024 and up
                    1024: {
                        itemsToShow: 5,
                        snapAlign: 'center',
                    },
                },
            }
        },
        props: ['data'],
        
    })

</script>

<template>
    <div class="client-section pt-3">
        <h2 class="text-center py-2">
            منتخبی از مشتریان
        </h2>
        <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true">
            <Slide v-for="(slide, index) in data" :key="index">
                <div class="carousel__item">
                    <img :src="api_base_url + slide?.image" width="60" alt="">
                    <h3>{{ slide?.title }}</h3>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
        <div class="d-flex justify-content-center py-4">
            <BtnRound title="مشاهده همه مشتریان" to="/clients" :is-primary="true" style="top: 0;" />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .client-section{
        width: 100%;
        overflow: hidden;
        background-color: rgba(239, 240, 233, 0.5);
        color: #3B566E;
        font-family: 'yekan';
        user-select: none;
        .carousel__item{
            h3{
                font-size: 35px;
                font-family: 'nastaliq';
                position: relative;
                bottom: 15px;
            }
            img{
                width: 110px;
                height: 110px;
                object-fit: contain;
            }
        }
    }
</style>