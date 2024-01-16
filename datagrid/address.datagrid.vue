<script>
import { get_addresses, getOne, deleteOne } from '@/services/address.service'
import Swal from 'sweetalert2'
import { ToastMessage } from '~/helpers/enum'
import { messages } from '~/helpers/function'
export default defineComponent({
    name: 'address-datagrid',
    data(){
        return {
            addresses: []
        }
    },
    async beforeCreate(){
        const res = await get_addresses().then(res => res)
        if(res && res.status == 200)
            this.addresses = res.data.entities.addresses 
        else
            messages(ToastMessage.ServerError)
    },
    components:{
        
    },
    methods:{
        deleteAddress(id, index){
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
                        this.addresses.splice(index, 1)
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
                        آدرس
                    </th>
                    <th>
                        شماره تماس
                    </th>
                    <th>
                        فکس(fax)
                    </th>
                    <th>
                        عملیات
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in addresses" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.text }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.fax }}</td>
                    <td>
                        <nuxt-link :to="'/admin/address/'+item.id" class="btn btn-sm btn-primary">
                            مشاهده
                        </nuxt-link>
                        <button @click="deleteAddress(item.id)" class="btn btn-sm btn-danger mx-1">
                            حذف
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-center title" v-if="addresses.length == 0">
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