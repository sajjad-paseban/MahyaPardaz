<script>
    import { defineComponent } from 'vue'
    import Logo from '../header/Logo.vue'
    import { ChevronLeftIcon } from '@heroicons/vue/16/solid'
    import FacebookIcon from '../../assets/svg/FacebookIcon.vue'
    import LinkedinIcon from '../../assets/svg/LinkedinIcon.vue'
    import GmailIcon from '../../assets/svg/GmailIcon.vue'
    import EitaIcon from '../../assets/svg/EitaIcon.vue'

    export default defineComponent({
        name: 'FooterModule',
        components:{
            Logo,
            ChevronLeftIcon,
            FacebookIcon,
            LinkedinIcon,
            GmailIcon,
            EitaIcon,
        }
    })

</script>


<template>
    <div class="footer">
        <div class="row justify-content-center flex-column-reverse flex-lg-row">
            <div class="col-lg-3 col-12 px-5 px-lg-0 d-flex flex-wrap justify-content-end footer-menu">
                <h2>ارتباط با ما</h2>
                <ul>
                    <li class="d-flex flex-wrap flex-column-reverse justify-content-end">
                        <div class="col-12 col-lg-auto">
                            map   
                        </div>
                        <div class="col-12 col-lg-auto">
                            <p>
                                شیراز، خیابان مطهری، جنب مسجد کبود
کوچه هفتم، پلاک 19
                            </p>
                            <p>
                                <b>
                                    تلفن: (272) 211-7370
                                </b>
                            </p>
                        </div>
                    </li>
                    <li>
                        <a data-url="out" data-lang="en" href="">info@mahyapardazyazd.com</a>
                        :ایمیل
                    </li>
                    <li class="d-flex justify-content-end">
                        <a href="">
                            <EitaIcon style="width: 24px; margin-right: 6px;position: relative;top: 38px;" />
                        </a>
                        <a href="">
                            <GmailIcon style="width: 23.5px; margin-right: 4px;" />
                        </a>
                        <a href="">
                            <LinkedinIcon style="width: 28px;" />
                        </a>
                        <a href="">
                            <FacebookIcon style="width: 30px;" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-1 col-12 d-flex px-5 px-lg-0 flex-wrap justify-content-end footer-menu">
                <h2>
                    دسترسی سریع
                </h2>
                <ul>
                    <li>
                        <nuxt-link to="">
                            صفحه اصلی
                            <ChevronLeftIcon style="width: 20px; position: relative; top: 7px;" />
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/project">
                            پروژه های ما
                            <ChevronLeftIcon style="width: 20px; position: relative; top: 7px;" />
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about-us">
                            درباره ما
                            <ChevronLeftIcon style="width: 20px; position: relative; top: 7px;" />
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/service">
                            خدمات ما
                            <ChevronLeftIcon style="width: 20px; position: relative; top: 7px;" />
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/blog">
                            بلاگ
                            <ChevronLeftIcon style="width: 20px; position: relative; top: 7px;" />
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4 col-12 px-5 d-flex flex-wrap justify-content-end align-self-md-start">
                <Logo title="محیاپرداز یزد" logo-src="https://pi4.ir/hesdesign/html/beapp/beapp/assets/images/logo-dark.svg" />
                <p>
                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 px-5">
                <hr style="border: 1px solid rgba(0, 0, 0, 0.05);">
                <p class="text-center my-3">
                    @ تمامی حقوق مادی و معنوی سایت متعلق به شرکت محیاپرداز یزد می باشد
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        padding-top: 80px;
        background-color: #F4F8FB;
        width: 100%;
        overflow: hidden;
        p{
            direction: rtl;
            text-align: justify;
            font-family: 'sans';
            font-size: 12px;
            line-height: 1.9;
            color: rgb(71, 84, 102);;
        }
        .footer-menu{
            h2{
                font-family: 'yekan';
                font-size: 18px;
                color: #3B566E;
            }
            ul{     
                position: relative;
                top: -18px;
                width: 100%;           
                padding: 0;
                list-style: none;
                li{
                    text-align: right;
                    font-family: 'yekan';
                    padding: 4px 0;
                    font-size: 16px;
                    a{
                        color: #3B566E;
                    }
                }
            }
        }
    }
</style>