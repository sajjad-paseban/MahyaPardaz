<script setup>
    import Header from '../modules/header/Component.vue'
    import Footer from '../modules/footer/Component.vue'
    import HeaderBanner from '../modules/header-banner/Component.vue'
</script>

<template>
    <Header />
    <HeaderBanner />
    <section class="main-section">
        <slot /> 
    </section>
    <footer class="footer-section">
        <Footer />
    </footer>
</template>

<style lang="scss" scoped>
    .main-section{
        position: relative;
        top: 640px;
    }
    .footer-section{
        position: relative;
        top: 640px;
    }
</style>
