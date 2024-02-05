<script>
import { string } from "yup";

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
            },
            showMainHeader: {
                type: Boolean,
                default: false
            },
            title:{
                type: String
            },
            description:{
                type: String
            }            
        }
    })    
</script>

<template>
    <div class="project-section pt-2 pb-4">
        <div class="row" v-if="showHeader">
            <div class="col text-center">
                <h2 v-if="showMainHeader" class="text-center display-6 border-bottom pb-3">
                    خدمات و محصولات ما
                </h2>
                <!-- <br>
                <h2>
                    {{ title }}
                </h2> -->
            </div>
        </div>
        <div class="row" v-if="showHeader">
            <div class="col text-center">
                <p class="px-5 description" dir="rtl">
                    {{ description }}
                </p>
            </div>
        </div>
        <div class="row justify-content-center my-3" dir="rtl">
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
        background-color: rgba($color: #EFF0E9, $alpha: 0.5);
        font-family: 'yekan';
        width: 100%;
        overflow: hidden;
        color: #3B566E;
        p{
            &.description{
                font-family: 'sans';
                font-size: 18px;
                line-height: 2;
                margin: 0 12%;
            }
            font-size: 18px;
        }
    }
    
    @media screen and (max-width: 500px) {
        .description{
            margin: 0 0% !important;
        }
    }
</style>