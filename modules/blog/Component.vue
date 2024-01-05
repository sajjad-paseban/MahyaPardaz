<script setup>
    import BlogCard from '../blog/Card.vue'
</script>

<template>
    <div class="blog-section">
        <div class="row">
            <div class="col text-center">
                <h2>
                    پست های اخیر بلاگ
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="text-center px-5 px-md-0" style="margin-bottom: 90px;">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
        </div>
        <div class="row justify-content-center">
            <BlogCard title="آموزش لاراول - فصل اول" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." img-src="https://static.roocket.ir/images/cover/2023/12/16/5bXkwppbwaAIC7LQPqkfr9MSFjkA04NixdFNVwZu.jpg" />
            <BlogCard title="آموزش لاراول - فصل اول" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." img-src="https://static.roocket.ir/images/cover/2023/12/16/5bXkwppbwaAIC7LQPqkfr9MSFjkA04NixdFNVwZu.jpg" />
            <BlogCard title="آموزش لاراول - فصل اول" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." img-src="https://static.roocket.ir/images/cover/2023/12/16/5bXkwppbwaAIC7LQPqkfr9MSFjkA04NixdFNVwZu.jpg" />
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
        background-color: rgba(255, 255, 238, 0.5);
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