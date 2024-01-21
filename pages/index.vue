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
            this.api_base_url = api_base_url('')
            const res = await index_data().then(res => res)
            if(res.status != 200){
                messages(ToastMessage.ServerError)
            }else{
                this.projects = res.data.entities.products
                this.blogs = res.data.entities.posts
                this.clients = res.data.entities.clients
            }

        },
        computed: {
            project_type_0(){
                return this.projects.filter((value, index) => value.type == 0)
            },
            project_type_1(){
                return this.projects.filter((value, index) => value.type == 1)
            },
        }
    })

</script>

<template>
    <!-- // سامانه های شهرداری -->
    <ProjectSection id="project" :showAllBtn="false" :showMainHeader="true" title="سامانه های شهرداری">
        <ProjectCard v-for="(i, index) in project_type_0" :key="index" 
        :imgSrc="api_base_url + i.image"
        :title="i.title"
        :description="i.short_description"
        :to="'/project/'+i.slug" />
    </ProjectSection>
    <!-- // سامانه های شهرداری -->

    <!-- // سامانه های شهروندی -->
    <ProjectSection :showAllBtn="false" title="سامانه های شهروندی">
        <ProjectCard v-for="(i, index) in project_type_1" :key="index" 
        :imgSrc="api_base_url + i.image"
        :title="i.title"
        :description="i.short_description"
        :to="'/project/'+i.slug" />
    </ProjectSection>
    <!-- // سامانه های شهروندی -->
    <ClientSection :data="clients" />
    <BlogSection> 
        <BlogCard v-for="(i, index) in blogs" :key="index" 
        :title="i.title" 
        :description="i.short_description" 
        :img-src="api_base_url + i.image"
        :to="'/blog/'+i.slug" />
    </BlogSection>
    <DetailSection />
</template>