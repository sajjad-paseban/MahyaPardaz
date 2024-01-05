<script>
    import PageBanner from '@/modules/page-banner/Component.vue'
    import ServiceCard from '@/modules/services/Card.vue'
    definePageMeta({
        layout: 'page'
    })

    export default defineComponent({
        name: "service",
        components: {
            PageBanner,
            ServiceCard
        }
    })
</script>

<template>
    <div style="overflow: hidden;">
        <PageBanner title="خدمات ما" />
        <div class="row py-5 px-2 justify-content-center">
            <div class="col-md-auto col-12" v-for="i in 6" :key="i">
                <ServiceCard style="width: 400px;" :isActive="i == 1 ? true : false" title="استراتژی خدمات" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />
            </div>
        </div>
    </div>
</template>