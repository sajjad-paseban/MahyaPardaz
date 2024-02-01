<script>
    import { defineComponent } from 'vue'
    import Logo from '../header/Logo.vue'
    import { ChevronLeftIcon } from '@heroicons/vue/16/solid'
    import { get_addresses } from '@/services/address.service'
    import { useBaseStore } from '~/store'
    export default defineComponent({
        name: 'FooterModule',
        components:{
            Logo,
            ChevronLeftIcon,
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
            const baseStore = useBaseStore()
            const res = await get_addresses().then(res => res)
            this.seo_title = baseStore.baseInfo.seo_title
            this.seo_description = baseStore.baseInfo.seo_description
            this.email = baseStore.baseInfo.email
            this.addresses = res.data.entities.addresses
        }
    })

</script>


<template>
    <div class="footer">

        
        <div class="row justify-content-center my-4">
            <div class="col-auto">
                <h2>ارتباط با ما</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div v-for="(i, index) in addresses" :key="index" class="col-md-4 mx-2 px-5">
                <p>
                    {{ i.text }}
                </p>
                <p>
                    <b>
                        تلفن: {{ i.phone }}
                    </b>
                </p>
                <p v-if="i.fax">
                    <b>
                        فکس: {{ i.fax }}
                    </b>
                </p>
            </div>
        </div>


        <div class="row justify-content-center py-3">
            <div class="col-auto link">
                <a data-url="out" data-lang="en" href="">
                    {{ email }}
                </a>
                :ایمیل
            </div>
        </div>



        <!-- <div class="row">
            <div class="col-12 px-5 d-flex flex-wrap justify-content-center py-4 align-self-md-start">
                <Logo :title="seo_title" logo-src="https://mahyapardaz.com/MahyaPardazYazd.png" />
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        border-top: 1px solid rgba($color: #ccc, $alpha: 0.4);
        background-color: #F4F8FB;
        width: 100%;
        overflow: hidden;
        p{
            direction: rtl;
            text-align: justify;
            font-family: 'yekan';
            font-size: 18px;
            line-height: 1.9;
            color: rgb(71, 84, 102);;
        }
        h2{
            font-family: 'yekan';
            font-size: 24px;
            color: #3B566E;
        }
        .link{
            margin-top: 20px;
            margin-right: 10px;
            font-family: 'yekan';
            color: #3B566E;

            a{
                position: relative;
                right: 5px;
            }

        }

    }

    @media screen and (max-width: 600px) {
        .footer{
            p{
                font-size: 18px;
            }
        }
    }
</style>