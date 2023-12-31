<script setup lang="ts">
    const { isSubmit, to, title } = defineProps({ isSubmit: Boolean, to: String, title: String})
</script>

<template>
    <NuxtLink v-if="!isSubmit" :to="to">
        {{ title }}
    </NuxtLink>

    <button v-else type="submit">
        {{ title }}
    </button>
</template>

<style scoped lang="scss">
    a, button{
        font-family: 'yekan';
        border: 1px solid #ffffff !important;
        padding: 14px 80px;
        border-radius: 50px;
        position: relative;
        top: 20px;
        // transition: color,background-color 300ms;
        &:hover{
            background-color: #ffffff;
        }
    }
</style>