<script>
    definePageMeta({
        layout: 'page'
    })

    import PageBanner from '@/modules/page-banner/Component.vue'

    export default defineComponent({
        name: 'about-us',
        components: {
            PageBanner
        }
    })
</script>

<template>
    <PageBanner title="درباره ما" />
    <div class="about-us">
        <p>
            این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
        </p>
        <img src="@/assets/images/background/welcome.jpg" alt="">
        <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
        </p>
    </div>
</template>

<style scoped lang="scss">
    .about-us{
        color: #6F8BA4;
        font-family: 'vazir';
        padding: 80px 270px;
        p{
            direction: rtl;
            text-align: justify;
            font-size: 16px;
            line-height: 1.75;
        }

        img{
            width: 100%;
            height: 600px;
            object-fit: cover;
            object-position: center center;
            border-radius: 6px;
        }
    }

    @media screen and (max-width: 1250px) {
        .about-us{
            padding: 80px 50px;
        }
    }
</style>