<template>
    <PageBanner title="مشتریان ما" />
    <div class="row justify-content-center m-3 overflow-hidden">
        <div class="col-auto rounded shadow my-3 mx-3 p-0" v-for="(client, index) in clients" :key="index">
            <div class="client-card">
                <div class="client-product">
                    <h3>محصولات مشتری</h3>
                    <ul>
                        <li v-for="(product, index) in client.products" :key="index">
                            <nuxt-link :to="'/project/'+product.slug">
                                {{ product.title }}
                            </nuxt-link>
                        </li>
                        <li v-if="!(client.products.length > 0)">
                            درحال حاضر محصولی ندارند
                        </li>
                    </ul>
                </div>
                <div class="client-info">
                    <img :src="api_base_url(client.image)" alt="">
                    <p>
                        {{ client.title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'page'
    })

    import PageBanner from '@/modules/page-banner/Component.vue'
    import { get_clients } from '@/services/client.service';
    import { api_base_url, messages } from '@/helpers/function';
    import { ToastMessage } from '@/helpers/enum';
    const clients = ref([])

    onMounted(async () => {
        const res = await get_clients().then(res => res)
        if(res && res.status == 200){
            clients.value = res.data.entities.clients
        }else{
            messages(ToastMessage.ServerError)

        }
    })
</script>

<style scoped lang="scss">
    .client-card{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 500px;
        color: rgb(71, 84, 102);
        .client-info{
            width: 45%;
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
            img{
                width: 180px;
                height: 180px;
                object-fit: contain;
                margin-top: 20px;
            }
            p{
                width: 100%;
                text-align: center;
                font-family: 'nastaliq';
                font-size: 40px;
            }
        }
        .client-product{
            width: 55%;
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            font-family: 'yekan';
            h3{
                font-size: 22px;
            }
            ul{
                width: 100%;
                direction: rtl;
                list-style: none;
                padding: 0;
                li{
                    margin: 10px 0;
                    a{
                        color: #3b566e;
                    }
                    a:visited{
                        color: #3b566e;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 500px) {
        .client-card{
            .client-info{
                img{
                    width: 100px;
                    height: 100px;
                }
                p{
                    font-size: 25px;
                }
            }
        }
    }
</style>