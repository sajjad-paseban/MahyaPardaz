<script setup lang="ts">
    const { isSubmit, to, title, isPrimary = false,isBlock=false } = defineProps({ isSubmit: Boolean, to: String, title: String, isPrimary: Boolean, isBlock: Boolean})
</script>

<template>
    <NuxtLink v-if="!isSubmit" :class="[ isPrimary ? 'primary' : 'default' , isBlock ? 'block':'']" :to="to">
        {{ title }}
    </NuxtLink>

    <button type="submit" v-else :class="[ isPrimary ? 'primary' : 'default' , isBlock ? 'block':'']">
        {{ title }}
    </button>
</template>

<style lang="scss" scoped>
    button, a{
        padding: 14px 70px;
        border-radius: 50px;
        position: relative;
        font-family: 'yekan';
        background-color: transparent;
        transition: color,background-color 300ms;
        top: 25px;
        &.block{
            display: block;
            text-align: center;
        }
        &.default{
            border: 1px solid #ffffff !important;
            color: #ffffff;
            &:hover{
                background-color: #ffffff !important;
                color: #4886ff;
            }
        }

        &.primary{
            border: 1px solid #4886FF !important;
            color: #4886FF;
            &:hover{
                background-color: #4886FF !important;
                color: #ffffff;
            }
        }
    }
</style>