<script>

import PageBanner from '@/modules/page-banner/Component.vue'

export default defineComponent({
    name: 'about-us',
    setup(){
        useHead({
            title: 'درباره ما'
        })
    },
    components: {
        PageBanner
    },
    beforeCreate: function(){
        definePageMeta({
            layout: 'page'
        })
    
    }
})
</script>

<template>
    <PageBanner title="درباره ما" />
    <div class="about-us">
        <p>
            شرکت مهندسی محیاپرداز در سال 1378 با هدف ارائه خدمات نرم افزاری در حوزه مدیریت شهری و شهرداری الکترونیک، بر اساس اصول مهندسی نرم افزار و نیز پردازش اطلاعات، تاسیس شده و به شماره 3930 به ثبت رسید.
خدمات و محصولات این شرکت پس از دو دهه فعالیت، در بیش از 150 پروژه در شهرهای مختلف کشور شامل شهرداری ها و سایر نهادهای خدمات شهری مورد استفاده قرار گرفته و به مرحله اجرا رسیده است.
        </p>
        <img src="@/assets/images/background/welcome.jpg" alt="">
        <p>
        </p>
    </div>
</template>

<style scoped lang="scss">
    .about-us{
        color: #6F8BA4;
        font-family: 'vazir';
        padding: 80px 270px;
        p{
            direction: rtl;
            text-align: justify;
            font-size: 16px;
            line-height: 1.75;
        }

        img{
            width: 100%;
            height: 600px;
            object-fit: cover;
            object-position: center center;
            border-radius: 6px;
        }
    }

    @media screen and (max-width: 1250px) {
        .about-us{
            padding: 80px 50px;
        }
    }
</style>