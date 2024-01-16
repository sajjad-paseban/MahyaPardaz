<script setup lang="ts">
    const { logoSrc, title, transparent } = defineProps({logoSrc: String, title: String, transparent: Boolean})
</script>

<template>
    <div class="logo" :class="[transparent? 'transparent' : '']">
        <nuxt-link to="/">
            <span class="logo-title" v-if="title">
                {{ title }}
            </span>
            <img class="logo-image" :src="logoSrc" alt="">
        </nuxt-link>
    </div>
</template>

<style scoped lang="scss">
    .logo{
        user-select: none;
        
        @media screen and (min-width: 950px) {
            &.transparent{
                .logo-title{
                    color: #ffffff;
                }
            }
        }

        .logo-title{
            position: relative;
            bottom: 16px;
            right: 10px;
            font-size: 28px;
            font-family: 'entezar';
            color: #212529;
        }
        .logo-image{
            position: relative;
            top: 4px;
            height: 55px;
        }
    }
</style>