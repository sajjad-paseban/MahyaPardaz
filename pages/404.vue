<script lang="ts">
definePageMeta({
    layout: 'page'
})

import PageBanner from '@/modules/page-banner/Component.vue'

export default defineComponent({
    name: '404',
    components: {
        PageBanner
    },
    beforeCreate(){
        useHead({
            title: 'یافت نشد'
        })
    }
})
</script>

<template>
    <PageBanner title="صفحه یافت نشد" />
    <div class="error">
        <h2>
            404
        </h2>
        <p>
            صفحه پیدا نشد
        </p>
    </div>
</template>

<style scoped lang="scss">
    .error{
        color: #3B566E;
        text-align: center;
        h2{
            font-size: 80px;
        }
        p{
            position: relative;
            bottom: 30px;
            font-size: 25px;
            font-family: 'yekan';
        }
    }
</style>