<script setup>
    import HeaderMenu from '../header/HeaderMenu.vue' 
    import Logo from '../header/Logo.vue'
</script>

<template>
    <header class="header-top transparent">
        <HeaderMenu :transparent="true"/>
        <Logo :transparent="true" logo-src="https://pi4.ir/hesdesign/html/beapp/beapp/assets/images/logo-dark.svg" title="محیاپرداز یزد" />
    </header>
</template>

<style lang="scss" scoped>
    .header-top{
        &.transparent{
            background-color: transparent;
            box-shadow: none;
        }
        background-color:#ffffff;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 28px 0px;
        min-height: 80px;
        display: flex;
        padding: 0 14%;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }

    @media screen and (max-width: 1224px) {
        .header-top{
            padding: 0 5%;
        }
    }
</style>