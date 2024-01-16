<script setup lang="ts">
    const {title, imgSrc, description, to} = defineProps({title: String, imgSrc: String, description: String, to: String}) 
</script>

<template>
    <div class="col-auto item bg-white p-0 m-2">
        <nuxt-link :to="to">
            <h3 class="text-center">
                {{ title }}
            </h3>
            <div class="image-cover">
                <div class="image-body">
                    <p>
                        {{ description }}
                    </p>
                </div>
                <div class="image-shadow"></div>
                <img :src="imgSrc" alt="">
            </div>
        </nuxt-link>
        <!-- <btn-round :is-block="true" title="جزئیات اپلیکیشن" :to="to" :is-primary="true" /> -->
    </div>
</template>

<style scoped lang="scss">
    .item{
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
        transition: transform 100ms;
        a{
            color: rgb(71, 84, 102);
        }
        a:visited{
            color: rgb(71, 84, 102);
        }
        &:hover{
            transform: scale(1.03);
            .image-cover{
                .image-body{
                    display: block;
                    width: 100%;
                }
                .image-shadow{
                    width: 100%;
                }
            }
        }
        .image-cover{
            position: relative;
            margin: 5px;
            border-radius: 5px;
            overflow: hidden;
            .image-shadow{
                background-color: rgba($color: #000000, $alpha: 0.8);
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 0;
                transition: width 300ms;
            }
            .image-body{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                width: 0;
                z-index: 2;
                display: none;

                p{
                    direction: rtl;
                    height: 250px;
                    text-align: justify;
                    padding: 5px 25px;
                    color: #fff;
                    font-size: 17px;
                }

            }
            img{
                border-radius: 5px;
                width: 350px;
                height: 300px;
                object-position: center center;
                object-fit: cover;
            }
        }


    }
</style>