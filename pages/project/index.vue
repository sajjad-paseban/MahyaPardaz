<script>
    import { defineComponent } from 'vue';
    import PageBanner from '@/modules/page-banner/Component.vue'
    import ProjectSection from '@/modules/project/Component.vue'
    import ProjectCard from '@/modules/project/Card.vue'
    
    definePageMeta({
        layout: 'page',
    })
        
    export default defineComponent({
        name: 'Project',
        components: {
            PageBanner,
            ProjectSection,
            ProjectCard
        }
    })
</script>

<template>
    <PageBanner title="پروژه های ما" />
    <ProjectSection :showAllBtn="false" :showHeader="false">
        <ProjectCard v-for="i in 12" :key="i" 
                imgSrc="https://www.landa-sme.ir/images/front/homepage-img-1.png"
                title="نرم افزار حسابداری رامک"
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" 
                :to="'/project/'+ i"/>
    </ProjectSection>
</template>