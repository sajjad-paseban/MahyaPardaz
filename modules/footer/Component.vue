<script>
    import { defineComponent } from 'vue'
    import Logo from '../header/Logo.vue'
    import { ChevronLeftIcon } from '@heroicons/vue/16/solid'
    import FacebookIcon from '../../assets/svg/FacebookIcon.vue'
    import LinkedinIcon from '../../assets/svg/LinkedinIcon.vue'
    import GmailIcon from '../../assets/svg/GmailIcon.vue'
    import EitaIcon from '../../assets/svg/EitaIcon.vue'
    import { getBaseInfo } from '~/helpers/function'
    import { get_addresses } from '@/services/address.service'
    export default defineComponent({
        name: 'FooterModule',
        components:{
            Logo,
            ChevronLeftIcon,
            FacebookIcon,
            LinkedinIcon,
            GmailIcon,
            EitaIcon,
        },
        data(){
            return {
                seo_description: null,
                email: null,
                seo_title: null,
                addresses: []
            }
        },
        async beforeMount(){
            const res = await get_addresses().then(res => res)
            this.seo_title = getBaseInfo().seo_title
            this.seo_description = getBaseInfo().seo_description
            this.email = getBaseInfo().email
            this.addresses = res.data.entities.addresses
        }
    })

</script>


<template>
    <div class="footer">
        <div class="row justify-content-center flex-column-reverse flex-lg-row">
            <div class="col-lg-3 col-12 px-5 px-lg-0 d-flex flex-wrap justify-content-end footer-menu">
                <h2>ارتباط با ما</h2>
                <ul>
                    <li v-for="(i, index) in addresses" :key="index" class="d-flex flex-wrap flex-column-reverse justify-content-end">
                        <!-- <div class="col-12 col-lg-auto">
                            map   
                        </div> -->
                        <div class="col-12 col-lg-auto">
                            <p>
                                {{ i.text }}
                            </p>
                            <p>
                                <b>
                                    تلفن: {{ i.phone }}
                                </b>
                            </p>
                            <p>
                                <b>
                                    فکس: {{ i.fax }}
                                </b>
                            </p>
                        </div>
                    </li>
                    
                    <li>
                        <a data-url="out" data-lang="en" href="">
                            {{ email }}
                        </a>
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
            <div class="col-lg-1 col-12 d-flex px-5 px-lg-0 flex-wrap justify-content-end align-self-start footer-menu">
                <h2>
                    دسترسی سریع
                </h2>
                <ul>
                    <li>
                        <nuxt-link to="/">
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
                <Logo :title="seo_title" logo-src="./MahyaPardazYazd.png" />
                <p class="d-block w-100">
                    {{ seo_description }}
                </p>
            </div>
        </div>
        <div class="row">
            <hr style="border: 1px solid rgba(0, 0, 0, 0.05);">
                <p class="text-center my-3">
                    @ تمامی حقوق مادی و معنوی سایت متعلق به شرکت محیاپرداز یزد می باشد
                </p>
            </div>
        </div>
            <div class="col-12 px-5">
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