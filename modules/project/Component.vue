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
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است                    
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