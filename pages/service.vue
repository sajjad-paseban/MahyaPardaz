<script>
    import PageBanner from '@/modules/page-banner/Component.vue'
    import ServiceCard from '@/modules/services/Card.vue'
    definePageMeta({
        layout: 'page'
    })

    export default defineComponent({
        name: "service",
        setup(){
            useHead({
                title: 'خدمات ما'
            })
        },
        data(){
            return {
                services: []
            }
        },
        components: {
            PageBanner,
            ServiceCard
        },
        mounted: function(){
            this.services = [
                { title: 'به روز رسانی نرم افزار' , description: 'بنا به درخواست شما، ما یک ممیزی نرم افزاری انجام می‌دهیم و ایده‎ها و توصیه‌هایی در مورد اینکه چه چیزی و چگونه می‌تواند بهبود یابد ارائه می‌دهیم. معماران ما بهترین راه‌حل‌ها و راه‌حل‌های فناوری را برای پیاده‌سازی بهبود سیستم ارائه خواهند داد.', isActive: false },
                { title: 'تیم پشتیبانی' , description: 'برای پروژه‌های بلندمدت و پیچیده، ما تیم‌های پشتیبانی فنی متشکل از اعضای تیم پروژه را با توجه به گزینه‌های متعدد، در یک زمان معین در روزهای کاری در دسترس داریم.', isActive: true },
                { title: 'پشتیبانی فنی' , description: 'پشتیبانی، تعمیر و نگهداری نرم افزار نیاز به تغییرات ایجاد شده در کد نرم افزار دارد. دامنه خدمات شامل رفع اشکال، مشکلات یکپارچه سازی، شکاف‌ها و خرابی‌های مربوط به عملکرد و امنیت است. نمایندگان پشتیبانی معمولا افرادی هستند که باطن محصول را می‌شناسند.', isActive: false },
                { title: 'ادغام عملکرد' , description: 'ما یک شرکت پشتیبانی نرم‌افزاری هستیم که به شما در طراحی، توسعه، پیاده‌سازی قابلیت‌های جدید و ادغام آنها با سایر ویژگی‌ها یا برنامه‌های شخص ثالث مورد استفاده در سازمان کمک می‌کنیم. معماران ما یک چارچوب ادغام دقیق ارائه خواهند کرد.', isActive: false }
            ]
        }
    })
</script>

<template>
    <div style="overflow: hidden;">
        <PageBanner title="خدمات ما" />
        <div class="row py-5 px-2 justify-content-center">
            <div class="col-md-auto col-12" v-for="(i, index) in services" :key="index">
                <ServiceCard style="width: 400px;" 
                    :isActive="i.isActive" 
                    :title="i.title" 
                    :description="i.description" />
            </div>
        </div>
    </div>
</template>