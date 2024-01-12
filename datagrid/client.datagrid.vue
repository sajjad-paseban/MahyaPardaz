<script>
import { get_clients, getOne, deleteOne } from '@/services/client.service'
import Swal from 'sweetalert2'
import { ToastMessage } from '~/helpers/enum'
import { api_base_url, messages } from '~/helpers/function'
export default defineComponent({
    name: 'client-datagrid',
    data(){
        return {
            api_base_url: api_base_url(),
            clients: []
        }
    },
    async beforeCreate(){
        const res = await get_clients().then(res => res)
        if(res && res.status == 200)
            this.clients = res.data.entities.clients 
        else
            messages(ToastMessage.ServerError)
    },
    components:{
        
    },
    methods:{
        deleteClient(id, index){
            Swal.fire({
                title: '<div style="font-size: 22px">آیا از انجام این کار اطمینان کامل دارید؟</div>',
                showCancelButton: true,
                cancelButtonText: 'خیر',
                showConfirmButton: true,
                confirmButtonText: 'بله',
            }).then(async result =>  {
                if(result.isConfirmed){
                    const res = await deleteOne(id).then(res => res) 
                    if(res && res.status == 200){
                        messages(ToastMessage.Success)
                        this.clients.splice(index, 1)
                    }
                    else{
                        messages(ToastMessage.ServerError)
                    }
                }
            })
        }
    }

})
</script>

<template>
    <div class="datagrid-table">
        <table class="table table-hover text-center" dir="rtl">
            <thead class="table-dark">
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        نام مشتری
                    </th>
                    <th>
                        لوگو
                    </th>
                    <th>
                        عملیات
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in clients" :key="index">
                    <td>{{ clients.length - index }}</td>
                    <td>{{ item.title }}</td>
                    <td>
                        <img :src="api_base_url + item.image" width="25" alt="">
                    </td>
                    <td>
                        <nuxt-link :to="'/admin/client/'+item.id" class="btn btn-sm btn-primary">
                            مشاهده
                        </nuxt-link>
                        <button @click="deleteClient(item.id)" class="btn btn-sm btn-danger mx-1">
                            حذف
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-center title" v-if="clients.length == 0">
            دیتایی درحال حاضر وجود ندارد
        </p>
    </div>
</template>

<style scoped lang="scss">
    .datagrid-table{
        max-height: 600px;
        overflow-y: auto;        
        table{
            border-spacing: 0;
            color: #fff !important;
        }
    }
</style>