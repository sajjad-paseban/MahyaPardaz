<template>
    <div class="loading">
        <Jumper class="spinner"></Jumper>
        <span>
            درحال برقراری ارتباط
        </span>
    </div>
</template>

<script>
import 'vue-loading-spinner/dist/vue-loading-spinner.css'
import Jumper from '@/components/Jumper.vue';
export default defineComponent({
    name: 'Loading',
    components: {
        Jumper
    }
})
</script>

<style lang="scss" scoped>
    .loading{
        position: fixed;
        z-index: 30 !important;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(127deg, #384DFF 0%, #579BE9 91%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .spinner{
            transform: scale(2.2);
            position: relative;
            bottom: 53px;
            right: 11px;
            align-self: flex-end;
        }
        span{
            align-self: flex-start;
            color: #fff;
            font-family: 'yekan';
            width: 100%;
            font-size: 16px;
            text-align: center;
        }
    }
</style>