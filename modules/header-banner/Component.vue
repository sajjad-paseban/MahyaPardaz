<script setup>
    import { ref } from 'vue'
    import { useBaseStore } from '~/store'
    const banner_title = ref(null)
    const banner_description = ref(null)

    onBeforeMount(() => {
        const baseStore = useBaseStore()
        banner_title.value = baseStore.baseInfo?.banner_title
        banner_description.value = baseStore.baseInfo?.banner_description
    })
    
    const icons = ref([
        'web.png',
        'laptop.png',
        'chip.png',
        'code.png',
        'network.png',
        'QR.png',
    ])
        
</script>

<template>
    <div class="background">
        <div class="background-layer"></div>
        <div class="background-main">
            <div class="bg-main-icons">
                <div class="bg-main-icons-item" v-for="(icon, index) in icons" :key="index">
                    <img :src="'/_nuxt/assets/images/avatar/'+icon" alt="">
                </div>
            </div>
            <div class="bg-main-intro">
                <h1>
                    {{ banner_title }}
                </h1>
                <p>
                    {{ banner_description }}
                </p>
            </div>
        </div>
        <img src="@/assets/images/background/rtl-bg-bottom.svg" alt="">
    </div>
</template>


<style lang="scss" scoped>
    .background{
        position: absolute;
        z-index: 0;
        width: 100%;
        .background-layer{
            background-image: linear-gradient(127deg, #384DFF 0%, #000404 91%);
            min-height: 640px;
            opacity: 0.8;
        }
        .background-main{
            position: absolute;
            z-index: 5;
            display: flex;
            top: 120px;
            width: 100%;
            justify-content: center;
            div{
                text-align: right;
                color: #ffffff;
            }
            .bg-main-icons{
                display: flex;
                width: calc(100% - 15%);
                visibility: hidden;
                padding-top: 50px;
                padding-left: 15%;
                flex-wrap: wrap;
                align-items: center;
                position: relative;
                top: 30px;
                .bg-main-icons-item{
                    display: flex;
                    justify-content: center;
                    background-color: #F2F3F4;
                    padding: 20px 20px;
                    margin: 0 10px;
                    bottom: 0;
                    transition: bottom 300ms linear;
                    &:hover{
                        position: relative;
                        bottom: 10px;
                    }
                    img{
                        width: 50px;
                        height: 50px;
                        object-fit: cover;
                    }
                    border-radius: 20px;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
                }
            }
            .bg-main-intro{
                width: calc(100% - 14.5%);
                padding-right: 14.5%;
                font-family: 'entezar';
                h1{
                    font-size: 60px;
                }
                p{
                    font-family: 'sans';
                    font-size: 14px;
                    line-height: 2;
                    direction: rtl;
                    font-size: 15px;
                    text-align: justify;
                }                
            }
        }
        & > img{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        background-image: url('@/assets/images/background/iot-city-1.jpg');
        background-position: center center;
        background-size: cover;
    }
    @media screen and (max-width: 950px) {
        .background-layer{
            min-height: 640px !important;
        }
        .background-main{
            top: 85px !important;
            flex-wrap: wrap;
            flex-direction: column-reverse;
            .bg-main-intro{
                margin-top: 25px;
                h1{
                    font-size: 40px !important;
                }
                p{
                    text-align: justify;
                }
                width: calc(100% - 10%) !important;
                padding: 0 5% !important;
            }
            .bg-main-icons{
                width: calc(100%) !important;
                padding: 70px 0 !important;
                row-gap: 20px;
                justify-content: center;
            }
        }
    }
</style>