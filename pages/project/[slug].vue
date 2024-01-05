<script>
    definePageMeta({
        layout: 'page'
    })

    import PageBanner from '@/modules/page-banner/Component.vue'
    import { DocumentTextIcon } from '@heroicons/vue/24/solid'
    export default defineComponent({
        name: 'project-detail',
        components: {
            PageBanner,
            DocumentTextIcon
        },
        data(){
            return {
                param: null
            }
        },
        mounted: function(){
            const route = useRoute()
            this.param = route.params.slug
        }
    })
</script>

<template>
    <PageBanner :title="param" />
    <div class="project-detail">
        <div class="row rounded shadow shadow-md">
            <div class="col-12">

                <div class="project-detail-header row justify-content-between border-bottom">
                    <div class="col-lg-auto col-12 d-flex flex-wrap align-items-center">
                    </div>
                    <div class="col-lg-auto col-12 py-3 d-flex flex-wrap flex-lg-nowrap justify-content-center flex-column-reverse flex-md-row">
                        <div class="mx-3">
                            <span class="project-detail-title d-block">
                                تست نرم افزار
                            </span>
                            <BtnRound is-block="true" title="پیش نمایش" :to="''" :is-primary="true" />
                        </div>
                        <img src="https://www.landa-sme.ir/images/front/homepage-img-1.png" alt="">
                    </div>
                </div>

                <div class="project-detail-description row border-bottom">
                    <div class="col-12 d-flex justify-content-end p-4">
                        <h2>
                            توضیحات
                        </h2>
                        <DocumentTextIcon class="h-3" style="fill: #4886FF"/>
                    </div>
                    <div class="col-12">
                        <p>
                            اپلیکیشن پوریس یک اپلیکیشن مدرن و فارسی با طراحی جذاب و رنگ بندی مناسب برای ساخت اپلیکشن سفارش غذا است، که به صورت قابل ویرایش در نرم افزار ادوبی می باشد. اپلیکیشن پوریس در رنگ های بسیار جذاب طراحی شده است که در صورت نیاز می توان به رنگ های دیگری تغییر داده و یا رنگ های جدیدی اضافه کنید.

اپلیکیشن پوریس یک اپلیکشن حرفه ای برای طراحی یک وب سایت سفارش غذا است. قابل ویرایش بودن آن به شما کمک می کند تغییرات لازم را در ایکس دی به راحتی ایجاد کنید. ظاهر جذاب و کاربر پسند اپلیکیشن، کاربران سایت شما را راضی نگه خواهد داشت. اپلیکیشن پوریس یکی از حرفه ای ترین و زیباترین اپلیکیشن های سفارش غذا می باشد
                        </p>    
                    </div>
                </div>

                <div class="project-detail-screenshot row border-bottom">
                    <div class="col-12 d-flex justify-content-end p-4">
                        <h2>
                            اسکرین شات ها
                        </h2>
                        <DocumentTextIcon class="h-3" style="fill: #4886FF"/>
                    </div>
                    <div class="col-12 d-flex justify-content-center flex-wrap">
                        <img src="https://pi4.ir/hesdesign/html/beapp/beapp/assets/images/mockup/3.jpg" alt="">
                        <img src="https://www.zoho.com/books/windows10-page/header-1x.png" alt="">
                        <img src="https://www.zoho.com/books/windows10-page/header-1x.png" alt="">
                        <img src="https://pi4.ir/hesdesign/html/beapp/beapp/assets/images/mockup/3.jpg" alt="">
                        <img src="https://www.zoho.com/books/windows10-page/header-1x.png" alt="">
                        <img src="https://pi4.ir/hesdesign/html/beapp/beapp/assets/images/mockup/3.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .project-detail{
        overflow: hidden;
        padding: 80px 15%;
        font-family: 'yekan';
        .project-detail-header{
            button,a{
                top: 0 !important;
                transform: scale(0.75);
                position: relative;
                left: 30px;
            }
            span.project-detail-title{
                position: relative;
                font-size: 25px;
                color: #3B566E;
                text-align: right;
                margin: 10px 0;
            }

            img{
                width: 200px;
                object-fit: cover;
                object-position: center center;
            }
        }

        .project-detail-description{
            h2{
                color: #3B566E;
                font-weight: bold;
                position: relative;
                bottom: 12px;
                right: 20px;
            }
            p{
                direction: rtl;
                text-align: justify;
                padding: 0 55px;
                line-height: 1.75;
                position: relative;
                bottom: 50px;
                color: #6F8BA4;
            }
        }

        .project-detail-screenshot{
            h2{
                color: #3B566E;
                font-weight: bold;
                position: relative;
                bottom: 12px;
                right: 20px;
            }

            img{
                min-width: 100px;
                height: 400px;
                object-fit: cover;
                object-position: center center;
                margin: 20px 10px;
                border-radius: 8px;
            }
        }
    }   
    @media screen and (max-width: 550px){
        .project-detail{
            padding: 50px 8% !important;
            .project-detail-header{
                span{
                    font-size: 20px !important;
                }
                button, a{
                    left: 50px;
                }
            }
        }
        .project-detail-screenshot{
            img{
                width: 100% !important;
                margin: 30px 8% !important;
                height: auto !important;
            }
        }
    }
</style>