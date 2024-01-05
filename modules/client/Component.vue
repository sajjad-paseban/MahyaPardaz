<script setup>
    import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
    const clients = ref([
        {src: '1200px-Bandar_Abbas_government_logo.svg.png', title: 'شهرداری بندرعباس'},
        {src: '56-.png', title: 'شهرداری تربت جام'},
        {src: 'Mashhad_government_logo.svg', title: 'شهرداری مشهد'},
    ])
    const img_pos = ref(0);

    const image_changer = (flag) => {
        if(flag === false && !(img_pos.value <= 0)){
            img_pos.value -= 1
        }
        
        if(flag === true && !(img_pos.value >= clients.value.length)){
            img_pos.value += 1
        }
    }
</script>

<template>
    <div class="client-section py-5">
        <div class="row justify-content-between">
            <div class="col-auto align-self-center">
                <ChevronLeftIcon @click="image_changer(false)" class="h-3 mx-5 slider" />
            </div>
            <div class="col-auto text-center align-self-center">
                <img :src="'/_nuxt/assets/images/client/'+clients[img_pos].src" width="60" alt="">
                <h3>{{ clients[img_pos].title }}</h3>
            </div>
            <div class="col-auto align-self-center">
                <ChevronRightIcon @click="image_changer(true)" class="h-3 mx-5 slider" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .client-section{
        width: 100%;
        overflow: hidden;
        background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
        color: #F7F8FF;
        font-family: 'yekan';
        user-select: none;
        .slider{
            cursor: pointer;
            transition: background-color 300ms;
            border-radius: 50px;
            padding: 5px;
            &:hover{
                background-color: rgba($color: #000000, $alpha: 0.5);
            }
        }
    }
</style>