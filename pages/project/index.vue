<script>
    import { defineComponent } from 'vue';
    import PageBanner from '@/modules/page-banner/Component.vue'
    import ProjectSection from '@/modules/project/Component.vue'
    import ProjectCard from '@/modules/project/Card.vue'
    import { get_projects } from '@/services/project.service'
    import { api_base_url, messages } from '~/helpers/function';
    import { ToastMessage } from '~/helpers/enum';
    
    definePageMeta({
        layout: 'page',
    })
        
    export default defineComponent({
        name: 'Project',
        setup(){
            navigateTo('/')
            
            useHead({
                title: 'پروژه های ما'
            })
        },
        data(){
            return {
                api_base_url: api_base_url(),
                projects: []
            }
        },
        async beforeMount(){
            const res = await get_projects().then(res => res)
            if(res && res.status == 200)
                this.projects = res.data.entities.products
            else
                messages(ToastMessage.ServerError)
        },
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
        <ProjectCard v-for="(i, index) in projects" :key="index" 
                :imgSrc="api_base_url + i.image"
                :title="i.title"
                :description="i.short_description" 
                :to="'/project/'+ i.slug"/>
    </ProjectSection>
</template>