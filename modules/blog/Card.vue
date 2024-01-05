<script setup lang="ts">
    const { imgSrc, to, title, description } = defineProps({imgSrc: String, to: String, title: String, description: String})
    import { ChevronDoubleLeftIcon } from '@heroicons/vue/16/solid'
</script>

<template>
    <div class="col-auto blog-item mx-4 my-5">
        <div class="image-cover">
            <nuxt-link :to="to">
                <img :src="imgSrc" alt="">
            </nuxt-link>
        </div>
        <h3>
            <nuxt-link :to="to">
                {{ title }}
            </nuxt-link>
        </h3>
        <p>
            {{ description }}
        </p>
        <div class="continue text-center">
            <nuxt-link :to="to">
                <ChevronDoubleLeftIcon class="h-3" />
                <span>
                    ادامه مطلب
                </span>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .blog-item{
        border-radius: 12px;
        font-family: 'yekan';
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
        h3{
            text-align: right;
            padding: 0 25px;
            position: relative;
            bottom: 35px;
            a{
                color: rgba(71,84,102, 1);
                &:hover{
                    color: #3595f6;
                }
            }
        }
        p{
            color: rgba(71,84,102, 1);
            width: 300px;
            direction: rtl;
            position: relative;
            bottom: 20px;
            padding: 0 17px;
            text-align: justify;
        }
        .image-cover{
            position: relative;
            bottom: 60px;
            width: calc(100% - 40px);     
            margin: 0 20px;       
            overflow: hidden;
            border-radius: 10px !important;
            display: flex;
            justify-content: center;
            img{
                border-radius: 10px !important;
                position: relative;
                width: 300px;
                height: inherit;
                object-fit: cover;
                object-position: center center;
                transition: transform 300ms;
                &:hover{
                    transform: scale(1.2);
                }
            }
        }
        
        .continue{
            padding: 8px 0;
            border-top: 1px solid rgba($color: #000000, $alpha: 0.08);
            a{
                color: #3595f6;
                &:hover{
                    color: rgba(71,84,102, 1);
                }            
                span{
                    font-size: 20px;
                    position: relative;
                    bottom: 10px;            
                }
            }
        }
    }
</style>