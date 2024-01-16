<script setup>
    import BlogCard from '../blog/Card.vue'
</script>

<template>
    <div class="blog-section">
        <div class="row">
            <div class="col text-center">
                <h2>
                    رویداد های ما
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="text-center px-5 px-md-0" style="margin-bottom: 50px;">
                    <!-- اخبار محیاپرداز یزد، رویدادها و اتفاقات مرتبط با روزرسانی نرم افزار ها -->
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <slot />
        </div>
        <div class="row justify-content-center my-5">
            <div class="col-auto">
                <btn-round to="/blog" title="مشاهده همه پست ها" :is-primary="true" />
            </div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
    .blog-section{
        width: 100%;
        padding: 60px 0;
        overflow: hidden;
        background-color: rgba($color: #D7E1DB, $alpha: 0.3);
        color: #3B566E;
        font-family: 'yekan';
        h2{
            font-size: 25px;
        }
        p{
            direction: rtl;
        }
    }
</style>