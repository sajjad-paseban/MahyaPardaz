<script setup>


    import PageBanner from '@/modules/page-banner/Component.vue'
    import { DocumentTextIcon } from '@heroicons/vue/24/solid'
    import { api_base_url as api_url, base_url } from '@/helpers/function'
    import { get_project } from '@/services/project.service'
    
    const route = useRoute()
    const res = await get_project(route.params.slug).then(res => res)
    const api_base_url = api_url()
    const project = ref(res.data.entities.product)

    definePageMeta({
        layout: 'page',
        middleware: ["not-found-request-project"]
    })
    
    useSeoMeta({
        ogTitle: res.data.entities.product.title,
        ogDescription: res.data.entities.product.short_description,
        ogUrl: base_url('project/'+res.data.entities.product.slug), 
        ogImage: api_url(res.data.entities.product.image),
        title: res.data.entities.product.title,
        description: res.data.entities.product.short_description,
    })
    
</script>

<template>
    <PageBanner :title="project?.title" :image="api_base_url + project?.image" />
    <div class="project-detail">
        <div class="row">
            <div class="col-12">
               
                <div class="project-detail-description row justify-content-between align-items-end flex-column-reverse flex-lg-row my-5">
                    <div class="col-lg-4 col-12 p-0 mt-5 mt-lg-0">
                        <img class="shadow shadow-md" :src="api_base_url + project?.image" alt="">
                    </div>
                    <div class="col-lg-7 col-12 position-relative">
                        <div class="row">
                            <div class="col-12" style="text-align: right;">
                                <h2 class="display-6" style="right: 0" dir="rtl">
                                    {{ project.title }}
                                </h2>
                            </div>
                        </div>
                        <div class="row rounded shadow shadow-md">
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
                    </div>
                </div>

                <div class="project-detail-screenshot row rounded shadow shadow-md">
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
        font-family: 'koodakbold';

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

            img{
                width: 100%;
                height: 350px;
                border-radius: 5px;
                object-fit: cover;
                object-position: center center;
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
                }

                p,div{
                    display: block;
                    direction: rtl;
                    color: #6F8BA4;
                    *{
                        font-family: 'koodakbold' !important;
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