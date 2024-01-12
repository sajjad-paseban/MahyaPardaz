<script>
    import ServicesSection from '../modules/services/Component.vue'
    import ServiceCard from '../modules/services/Card.vue'
    import ProjectSection from '../modules/project/Component.vue'
    import ProjectCard from '../modules/project/Card.vue'
    import DetailSection from '../components/detail/Component.vue'
    import BlogSection from '../modules/blog/Component.vue'
    import BlogCard from '../modules/blog/Card.vue'
    import ClientSection from '../modules/client/Component.vue'    
    import { index_data } from '~/services/index.service'
    import { messages,api_base_url } from '~/helpers/function'
    import { ToastMessage } from '~/helpers/enum'
    
    export default defineComponent({
        name: 'index',
        data(){
            return {
                api_base_url: null,
                clients: [],
                blogs: [],
                projects: [],
                services: []
            }
        },
        setup(){
            useHead({
                title: 'صفحه اصلی'
            })
        },
        components: {
            ServicesSection,
            ServiceCard,
            ProjectSection,
            ProjectCard,
            DetailSection,
            BlogSection,
            BlogCard,
            ClientSection,
        },
        mounted: async function(){

            this.services = [
                { title: 'به روز رسانی نرم افزار' , description: 'بنا به درخواست شما، ما یک ممیزی نرم افزاری انجام می‌دهیم و ایده‎ها و توصیه‌هایی در مورد اینکه چه چیزی و چگونه می‌تواند بهبود یابد ارائه می‌دهیم. معماران ما بهترین راه‌حل‌ها و راه‌حل‌های فناوری را برای پیاده‌سازی بهبود سیستم ارائه خواهند داد.', isActive: false },
                { title: 'تیم پشتیبانی' , description: 'برای پروژه‌های بلندمدت و پیچیده، ما تیم‌های پشتیبانی فنی متشکل از اعضای تیم پروژه را با توجه به گزینه‌های متعدد، در یک زمان معین در روزهای کاری در دسترس داریم.', isActive: true },
                { title: 'پشتیبانی فنی' , description: 'پشتیبانی، تعمیر و نگهداری نرم افزار نیاز به تغییرات ایجاد شده در کد نرم افزار دارد. دامنه خدمات شامل رفع اشکال، مشکلات یکپارچه سازی، شکاف‌ها و خرابی‌های مربوط به عملکرد و امنیت است. نمایندگان پشتیبانی معمولا افرادی هستند که باطن محصول را می‌شناسند.', isActive: false },
                { title: 'ادغام عملکرد' , description: 'ما یک شرکت پشتیبانی نرم‌افزاری هستیم که به شما در طراحی، توسعه، پیاده‌سازی قابلیت‌های جدید و ادغام آنها با سایر ویژگی‌ها یا برنامه‌های شخص ثالث مورد استفاده در سازمان کمک می‌کنیم. معماران ما یک چارچوب ادغام دقیق ارائه خواهند کرد.', isActive: false }
            ]
            
            this.api_base_url = api_base_url('')
            const res = await index_data().then(res => res)
            if(res.status != 200){
                messages(ToastMessage.ServerError)
            }else{
                this.projects = res.data.entities.products
                this.blogs = res.data.entities.posts
                this.clients = res.data.entities.clients
            }

        }
    })

</script>

<template>
    <ServicesSection>
        <ServiceCard v-for="(i, index) in services" :key="index"
            :isActive="i.isActive" 
            :title="i.title" 
            :description="i.description" />
    </ServicesSection>
    <ClientSection :data="clients" />
    <ProjectSection>
        <ProjectCard v-for="(i, index) in projects" :key="index" 
            :imgSrc="api_base_url + i.image"
            :title="i.title"
            :description="i.short_description"
            :to="'/project/'+i.slug" />
    </ProjectSection>
    <DetailSection />
    <BlogSection> 
            <BlogCard v-for="(i, index) in blogs" :key="index" 
                :title="i.title" 
                :description="i.short_description" 
                :img-src="api_base_url + i.image"
                :to="'/blog/'+i.slug" />
    </BlogSection>
</template>