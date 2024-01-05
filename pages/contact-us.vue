<script>
    import PageBanner from '@/modules/page-banner/Component.vue'
    import ContactUsForm from '@/forms/ContactUs.form.vue'
    definePageMeta({
        layout: 'page'
    })

    export default defineComponent({
        name: 'contact-us',
        data(){
            return {

            }
        },
        components: {
            PageBanner,
            ContactUsForm
        }
    })
</script>

<template>
    <PageBanner title="ارتباط با ما" />
    <div class="contact-us">
        <p class="text-center p-3 p-lg-0">
            جهت ارتباط با شرکت محیا پرداز یزد، مشخصات خود را در فرم زیر وارد نمایید و همکاران ما حداکثر تا 24 ساعت بعد با شما تماس خواهند گرفت.
        </p>
        <ContactUsForm />
    </div>    
</template>

<style scoped lang="scss">
    .contact-us{
        overflow: hidden;
        font-family: 'vazir';
        width: 100%;
        padding: 50px 0px;
        p{
            color: #6F8BA4;        
            font-size: 16px;
            direction: rtl;
        }
    }
</style>