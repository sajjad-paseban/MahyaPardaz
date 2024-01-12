<script>
    export default defineComponent({
        name: "ProjectModule",
        props: {
            showAllBtn: {
                type: Boolean,
                default: true
            },
            showHeader: {
                type: Boolean,
                default: true
            }
        }
    })    
</script>

<template>
    <div class="project-section py-5">
        <div class="row" v-if="showHeader">
            <div class="col text-center">
                <h2>
                    پروژه های ما
                </h2>
            </div>
        </div>
        <div class="row" v-if="showHeader">
            <div class="col text-center">
                <p class="px-5">
                    خدمات و محصولات این شرکت پس از دو دهه فعالیت، در بیش از 150 پروژه در شهرهای مختلف کشور شامل شهرداری ها و سایر نهادهای خدمات شهری مورد استفاده قرار گرفته و به مرحله اجرا رسیده است
                </p>
            </div>
        </div>
        <div class="row justify-content-center my-3">
            <slot />
        </div>
        <div class="row justify-content-center my-5" v-if="showAllBtn">
            <div class="col-auto">
                <btn-round to="/project" title="مشاهده همه پروژه" :is-primary="true" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .project-section{
        background-color: rgba(244, 248, 251, 0.8);
        font-family: 'yekan';
        width: 100%;
        overflow: hidden;
        color: #3B566E;
    }
</style>