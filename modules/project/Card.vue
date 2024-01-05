<script setup lang="ts">
    const {title, imgSrc, description, to} = defineProps({title: String, imgSrc: String, description: String, to: String}) 
</script>

<template>
    <div class="col-auto item bg-white px-4 py-5 m-2">
        <img :src="imgSrc" alt="">
        <h3 class="text-center">
            {{ title }}
        </h3>
        <p>
            {{ description }}
        </p>
        <btn-round :is-block="true" title="جزئیات اپلیکیشن" :to="to" :is-primary="true" />
    </div>
</template>

<style scoped lang="scss">
    .item{
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.06);
        // width: 350px;
        img{
            width: 350px;
            min-height: 200px;
            object-position: center center;
            object-fit: cover;
        }

        p{
            direction: rtl;
            width: 350px;
            text-align: justify;
        }

    }
</style>