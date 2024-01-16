<script>

import LoginForm from "@/forms/login.form.vue"

export default defineComponent({
    name: 'LoginPage',
    components: {
        LoginForm
    },
    beforeCreate(){
        definePageMeta({
            layout: 'custom'
        })

        useHead({
            title: 'ورود - سامانه مدیریت'
        })
    }
})
</script>

<template>
    <div class="cover">
        <div class="cover-image"></div>
        <div class="cover-smoke"></div>
    </div>
    <div class="main d-flex flex-wrap align-items-center justify-content-lg-end justify-content-center">
        <div class="col-xl-2 col-lg-4 col-10 rounded-2 p-3 mx-5 bg-white">
            <LoginForm />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .cover{
        .cover-image{
            background-image: url('@/assets/images/background/welcome.jpg');
            position: fixed;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
        .cover-smoke{
            // linear-gradient(115deg, rgb(98, 207, 244), )
            background-color: rgba(44, 103, 242,0.5);
            position: fixed;
            z-index: 3;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
    .main{
        position: fixed;
        z-index: 4;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>