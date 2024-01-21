<script>


    import PageBanner from '@/modules/page-banner/Component.vue'
    import { DocumentTextIcon } from '@heroicons/vue/24/solid'
    import { api_base_url, base_url } from '@/helpers/function'
    import { get_project } from '@/services/project.service'
    
    export default defineComponent({
        name: 'project-detail',
        components: {
            PageBanner,
            DocumentTextIcon
        },
        async setup(){
            
            const route = useRoute()
            const res = await get_project(route.params.slug).then(res => res)

            definePageMeta({
                layout: 'page',
                middleware: ["not-found-request-project"]
            })
            
            useSeoMeta({
                ogTitle: res.data.entities.product.title,
                ogDescription: res.data.entities.product.short_description,
                ogUrl: base_url('project/'+res.data.entities.product.slug), 
                ogImage: api_base_url(res.data.entities.product.image),
                title: res.data.entities.product.title,
                description: res.data.entities.product.short_description,
            })

            return {
                project: res.data.entities.product
            }
        
        },
        data(){
            return {
                api_base_url: api_base_url(),
            }
        },
    })
</script>

<template>
    <PageBanner :title="project?.title" :image="api_base_url + project?.image" />
    <div class="project-detail">
        <div class="row rounded shadow shadow-md">
            <div class="col-12">

                <div class="project-detail-header row justify-content-between border-bottom">
                    <div class="col-lg-auto col-12 d-flex flex-wrap align-items-center">
                    </div>
                    <div class="col-lg-auto col-12 py-3 d-flex flex-wrap flex-lg-nowrap justify-content-center flex-column-reverse flex-md-row">
                        <div class="mx-3">
                            <span class="project-detail-title d-block">
                                {{ project?.title }}
                            </span>
                            <BtnRound is-block="true" title="پیش نمایش" :to="''" :is-primary="true" />
                        </div>
                        <img :src="api_base_url + project?.image" alt="">
                    </div>
                </div>

                <div class="project-detail-description row border-bottom">
                    <div class="col-12 d-flex justify-content-end p-4">
                        <h2>
                            معرفی سامانه
                        </h2>
                        <DocumentTextIcon class="h-3" style="fill: #4886FF"/>
                    </div>
                    <div class="col-12">
                        <p>
                            {{ project?.short_description }}
                        </p>
                    </div>
                </div>

                <div class="project-detail-screenshot row border-bottom">
                    <div class="col-12 d-flex justify-content-end p-4">
                        <h2>
                            نگاه کلی
                        </h2>
                        <DocumentTextIcon class="h-3" style="fill: #4886FF"/>
                    </div>
                    <div v-html="project?.content" class="content col-12 px-5 pb-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .project-detail{
        overflow: hidden;
        padding: 80px 15%;
        font-family: 'yekan';
        .project-detail-header{
            display: none;
            button,a{
                top: 0 !important;
                transform: scale(0.75);
                position: relative;
                left: 30px;
            }

            span.project-detail-title{
                position: relative;
                font-size: 25px;
                color: #3B566E;
                text-align: right;
                margin: 10px 0;
            }

            img{
                width: 200px;
                object-fit: cover;
                object-position: center center;
            }
        }

        .project-detail-description{
            h2{
                color: #3B566E;
                font-weight: bold;
                position: relative;
                bottom: 12px;
                right: 20px;
            }
            p{
                direction: rtl;
                text-align: justify;
                padding: 0 55px;
                line-height: 1.75;
                position: relative;
                bottom: 50px;
                color: #6F8BA4;
                font-size: 18px;
            }
        }

        .project-detail-screenshot{
            
            .content{
                img{
                    min-width: 200px;
                    max-width: 100% !important;
                    object-fit: fill;
                    height: 100%;
                    display: block !important;
                    border-radius: 4px;
                    box-shadow: 1px 1px 5px rgba($color: #000, $alpha: 0.1);
                }

                p,div{
                    display: block;
                    direction: rtl;
                    color: #6F8BA4;
                    *{
                        font-family: 'yekan' !important;
                    }
                }
            }

            h2{
                color: #3B566E;
                font-weight: bold;
                position: relative;
                bottom: 12px;
                right: 20px;
            }

            img{
                min-width: 100px;
                height: 400px;
                object-fit: cover;
                object-position: center center;
                margin: 20px 10px;
                border-radius: 8px;
            }
        }
    }   
    @media screen and (max-width: 550px){
        .project-detail{
            padding: 50px 8% !important;
            .project-detail-header{
                span{
                    font-size: 20px !important;
                }
                button, a{
                    left: 50px;
                }
            }
        }
        .project-detail-screenshot{
            img{
                width: 100% !important;
                margin: 30px 8% !important;
                height: auto !important;
            }
        }
    }
</style>