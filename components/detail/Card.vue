<script lang="ts" setup>
    const { number, title } = defineProps({number: String, title: String})
</script>

<template>
    <div class="col-auto mx-5 text-center">
        <div class="line line-top"></div>
        <h2>{{ number }}</h2>
        <h3>{{ title }}</h3>
        <div class="line line-bottom"></div>
    </div>
</template>

<style scoped lang="scss">
    h2{
        font-size: 35px;
        position: relative;
        right: 4px;
    }
    h3{
        font-size: 18px;
    }
    .line{
        position: relative;
        left: calc(50% - 6%);
        height: 35px;
        width: 6px;
        background-color: #fff;
        &.line-top{
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        &.line-bottom{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

    }
    
    @media screen and (max-width: 500px) {
        h2{
            right: 3px;
        }
        .line{
            display: none;
        }
    }
</style>