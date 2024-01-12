<script lang="ts">

export default defineComponent({
    name: 'error',
    components: {
    },
    beforeCreate(){
        navigateTo('/404')
    }
})
</script>

<template>
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