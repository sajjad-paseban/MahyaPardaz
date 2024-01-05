<script setup>
    import ServicesSection from '../modules/services/Component.vue'
    import ServiceCard from '../modules/services/Card.vue'
    import ProjectSection from '../modules/project/Component.vue'
    import ProjectCard from '../modules/project/Card.vue'
    import DetailSection from '../modules/detail/Component.vue'
    import BlogSection from '../modules/blog/Component.vue'
    import ClientSection from '../modules/client/Component.vue'    
</script>

<template>
    <ServicesSection>
        <ServiceCard v-for="i in 4" :key="i"
            :isActive="i == 2 ? true : false" 
            title="استراتژی خدمات" 
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />
    </ServicesSection>
    <ClientSection />
    <ProjectSection>
        <ProjectCard v-for="i in 3" :key="i" 
            imgSrc="https://www.landa-sme.ir/images/front/homepage-img-1.png"
            title="نرم افزار حسابداری رامک"
            description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" />
    </ProjectSection>
    <DetailSection />
    <BlogSection />
</template>