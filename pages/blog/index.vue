<script>

    import PageBanner from '@/modules/page-banner/Component.vue'
    import BlogCard from '@/modules/blog/Card.vue'
    import BtnRound from '@/components/BtnRound.vue'
    import { get_blogs } from '@/services/blog.service'
    import { api_base_url, messages } from '~/helpers/function'
    import { ToastMessage } from '~/helpers/enum'
    export default defineComponent({
        name: 'blog',
        data(){
            return {
                api_base_url: api_base_url(),
                blogs: []
            }
        },
        components: {
            PageBanner,
            BlogCard,
            BtnRound
        },
        beforeCreate: function(){
            definePageMeta({
                layout: 'page'
            })

            useHead({
                title: 'رویدادها'
            })
        },
        beforeMount: async function(){
            const res = await get_blogs().then(res => res)
            if(res && res.status == 200)
                this.blogs = res.data.entities.posts
            else
                messages(ToastMessage.ServerError)
        }
    })
</script>

<template>
    <PageBanner title="رویدادها" />
    <div class="blog">
        <div class="row flex-column-reverse flex-lg-row justify-content-center p-4 p-lg-0">
            <div class="col-lg-3 col-12 my-5 d-flex flex-wrap align-self-start">
                <div class="contact-us-card py-5 shadow shadow-sm">
                    <p>
                        در مورد پروژه های خود به ما بگویید و ما با جزئیات نحوه انجام این کار به شما پاسخ خواهیم داد.
                    </p>
                    <BtnRound title="ارتباط با ما" :is-block="true" to="/contact-us" />
                </div>
                <div class="tags-card my-4 p-4 shadow shadow-sm">
                    <nuxt-link class="tag-badge" to="">
                        توسعه
                    </nuxt-link>
                    <nuxt-link class="tag-badge" to="">
                        فرآیند
                    </nuxt-link>
                </div>
            </div>
            <div class="col-lg-6 col-12 d-flex flex-wrap justify-content-center my-5">
                <BlogCard
                    v-for="(i, index) in blogs" :key="index"
                    :title="i.title"
                    :description="i.short_description" 
                    :img-src="api_base_url + i.image" 
                    :to="'/blog/'+i.slug"
                    />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .blog{
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
            padding: 15px;
            text-align: justify;
            direction: rtl;
            font-family: 'vazir';
            border-radius: 4px;
            a.tag-badge{
                color: #6F8BA4;
                background-color: #DCE9F8;
                padding: 5px 8px;
                margin: 3px;
                font-size: 13px;
                border-radius: 3px;
                font-weight: bold;
            }
        }
    }


</style>