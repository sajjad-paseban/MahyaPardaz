<script setup>
    import { ref } from 'vue'
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
                    توسعه اپلیکیشن موبایل
                </h1>
                <h1>
                    از ایده تا اجرا
                </h1>
                <p>
                    اپلیکیشن موبایل یک ابزار اطلاعاتی به حساب می آید. اگر تعداد مشخصی مشتری ثابت دارید. اگر به دنبال افراد وفادار به کسب و کار خود هستید. اگر خدماتی انحصاری ارایه میدهید. اگر قصد ساخت ابزاری کاربردی دارید و…
                </p>
                <BtnRound title="نمونه کارهای ما" />
            </div>
        </div>
        <img src="@/assets/images/background/rtl-bg-bottom.svg" alt="">
    </div>
</template>


<style lang="scss" scoped>
    .background{
        position: relative;
        z-index: -10;
        width: 100%;
        .background-layer{
            background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
            height: inherit;
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
                font-family: 'yekan';
                h1{
                    font-size: 55px;
                }
                p{
                    font-family: 'sans';
                    font-size: 14px;
                    direction: rtl;
                }                
            }
        }
        & > img{
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        height: 640px;
        background-image: url('@/assets/images/background/welcome.jpg');
        background-position: center center;
        background-size: cover;
    }
</style>