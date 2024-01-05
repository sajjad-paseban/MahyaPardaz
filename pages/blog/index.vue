<script>
    definePageMeta({
        layout: 'page'
    })

    import PageBanner from '@/modules/page-banner/Component.vue'
    import BlogCard from '@/modules/blog/Card.vue'
    import BtnRound from '@/components/BtnRound.vue'
    export default defineComponent({
        name: 'blog',
        components: {
            PageBanner,
            BlogCard,
            BtnRound
        }    
    })
</script>

<template>
    <PageBanner title="بلاگ" />
    <div class="blog">
        <div class="row justify-content-center p-4 p-lg-0">
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
                    v-for="i in 4"
                    :key="i" 
                    title="آموزش لاراول - فصل اول" 
                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." 
                    img-src="https://static.roocket.ir/images/cover/2023/12/16/5bXkwppbwaAIC7LQPqkfr9MSFjkA04NixdFNVwZu.jpg" 
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
            background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
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
                background-color: #F4F8FB;
                padding: 5px 8px;
                margin: 3px;
                font-size: 13px;
                border-radius: 3px;
                font-weight: bold;
            }
        }
    }


</style>