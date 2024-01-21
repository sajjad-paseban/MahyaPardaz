<script>
    import { UserIcon } from '@heroicons/vue/24/solid'
    import FacebookIcon from '../../assets/svg/FacebookIcon.vue'
    import LinkedinIcon from '../../assets/svg/LinkedinIcon.vue'
    import GmailIcon from '../../assets/svg/GmailIcon.vue'
    import EitaIcon from '../../assets/svg/EitaIcon.vue'
    import PageBanner from '@/modules/page-banner/Component.vue'
    import { get_blog } from '~/services/blog.service'
    import { api_base_url, base_url } from '~/helpers/function'
    
    export default defineComponent({
        name: 'blog-detail',
        async setup(){
            
            const route = useRoute()
            const res = await get_blog(route.params.slug).then(res => res)
            
            definePageMeta({
                layout: 'page',
                middleware: ['not-found-request-blog']
            })
            
            
            useSeoMeta({
                ogTitle: res.data.entities.post.title,
                ogDescription: res.data.entities.post.short_description,
                ogUrl: base_url('blog/'+res.data.entities.post.slug), 
                ogImage: api_base_url(res.data.entities.post.image),
                title: res.data.entities.post.title,
                description: res.data.entities.post.short_description,
            })
            
            return {
                blog: res.data.entities.post
            }
        },
        data(){
            return {
                api_base_url: api_base_url(),
            }
        },
        components: {
            PageBanner,
            UserIcon,
            FacebookIcon,
            LinkedinIcon,
            GmailIcon,
            EitaIcon,
        }
    })
</script>

<template>
    <PageBanner :title="blog?.title" />
    <div class="blog-detail">
        <div class="row justify-content-center flex-column-reverse flex-lg-row p-4 p-lg-0">
            <div class="col-lg-3 col-12 my-5 d-flex flex-wrap align-self-start">
                <div class="contact-us-card py-5 shadow shadow-sm">
                    <p>
                        در مورد پروژه های خود به ما بگویید و ما با جزئیات نحوه انجام این کار به شما پاسخ خواهیم داد.
                    </p>
                    <BtnRound title="ارتباط با ما" :is-block="true" to="/contact-us" />
                </div>
                <div class="tags-card d-flex flex-wrap justify-content-center my-4 p-4 shadow shadow-sm">
                    <nuxt-link class="tag-badge" v-for="(i, index) in blog?.keywords" :key="index" to="ad">
                        {{ i.title }}
                    </nuxt-link>
                </div>
            </div>
            <div class="col-lg-7 col-12 my-5">
                <div class="row blog-detail-header">
                    <div class="col-12">
                        <img :src="api_base_url + blog?.image" alt="">
                    </div>
                    <div class="col-12 my-2 d-flex justify-content-end">
                        <span>
                            توسط ادمین
                        </span>
                        <UserIcon style="width: 18px; fill: rgb(72, 134, 255);" class="h-3" />    
                    </div>
                </div>
                <div class="row blog-detail-content">
                    <div class="col-12 content" v-html="blog?.content">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .blog-detail{
        overflow: hidden;
        .contact-us-card{
            width: calc(100% - 60px);
            font-size: 17px;
            direction: rtl;
            text-align: justify;
            border-radius: 4px;
            line-height: 1.5;
            background-image: linear-gradient(127deg, #384DFF 0%, #579BE9 91%);
            color: #fff;
            font-family: 'vazir';
            padding: 30px;
        }
    
        .tags-card{
            width: calc(100% - 30px);
            border: 1px solid rgba($color: #000000, $alpha: 0.08);
            padding: 15px 15px !important;
            text-align: justify;
            direction: rtl;
            font-family: 'vazir';
            border-radius: 4px;
            a.tag-badge{
                color: #6F8BA4;
                background-color: #F4F8FB;
                padding: 5px 8px;
                margin: 3px;
                font-size: 11px;
                border-radius: 3px;
                font-weight: bold;
            }
        }

        .blog-detail-header{
            img{
                width: 100%;
                object-fit: cover;
                object-position: center center;
                max-height: 500px;
                border-radius: 5px;
                box-shadow: 1px 1px 5px rgba($color: #000, $alpha: 0.1);
            }
            span{
                color: rgb(72, 134, 255);
                font-family: 'yekan';
                font-size: 18px;
                position: relative;
                top: 6px;
                right: 5px;                
                user-select: none;

            }
            border-bottom: 1px solid rgba($color: #000, $alpha: 0.08);
        }
        p{
            text-align: center !important;
        }
        .blog-detail-content{
            direction: rtl;
            span,p{
                font-family: 'yekan';
                font-size: 17px;
                text-align: justify !important;
                color: #6F8BA4;
            }
            .content{
                img{
                    min-width: 200px;
                    max-width: 100% !important;
                    height: 100%;
                    object-fit: fill;
                    display: block !important;
                    border-radius: 4px;
                    box-shadow: 1px 1px 5px rgba($color: #000, $alpha: 0.1);
                }

                p,div{
                    direction: rtl;
                    display: block;
                    color: #6F8BA4;
                    *{
                        font-family: 'yekan' !important;
                    }
                }

            }
        }
    }
</style>