<script lang="ts">
import Header from '@/modules/header/Component.vue'
import Footer from '@/modules/footer/Component.vue'
export default defineComponent({
    name: 'PageLayout',
    components: {
        Header,
        Footer
    }
})
</script>

<template>
    <Header />
    <slot />
    <Footer />
</template>