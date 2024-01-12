<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { api_base_url as apiBaseUrl } from '~/helpers/function';

    export default defineComponent({
        name: 'client-section',
        components: {
            ChevronLeftIcon,
            ChevronRightIcon
        },
        data(){
            return {
                img_pos: 0,
                api_base_url: apiBaseUrl()
            }
        },
        props: ['data'],
        methods: {
            image_changer(flag){
                if(flag === false && !(this.img_pos <= 0)){
                    this.img_pos -= 1
                }
                
                if(flag === true && !(this.img_pos >= this.data.length - 1)){
                    this.img_pos += 1
                }
            }
        }
        
    })

</script>

<template>
    <div class="client-section py-5">
        <div class="row justify-content-between">
            <div class="col-auto align-self-center">
                <ChevronLeftIcon @click="image_changer(false)" class="h-3 mx-5 slider" />
            </div>
            <div class="col-auto text-center align-self-center">
                <img :src="api_base_url + data[img_pos]?.image" width="60" alt="">
                <h3>{{ data[img_pos]?.title }}</h3>
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