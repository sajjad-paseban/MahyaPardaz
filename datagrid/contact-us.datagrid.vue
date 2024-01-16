<script>
import { getAll, getOne, deleteOne } from '@/services/contact-us.service'
import Swal from 'sweetalert2'
import { ToastMessage } from '~/helpers/enum'
import { messages } from '~/helpers/function'
export default defineComponent({
    name: 'contact-us-datagrid',
    data(){
        return {
            requests: []
        }
    },
    async beforeCreate(){
        const res = await getAll().then(res => res)
        if(res && res.status == 200)
            this.requests = res.data.entities.requests 
        else
            messages(ToastMessage.ServerError)
    },
    components:{
        
    },
    methods:{
        async showDescription(id){
            const res = await getOne(id).then(res => res) 
            if(res && res.status == 200)
                Swal.fire({
                    text: res.data.entities.request.description,
                    confirmButtonText: 'باشه'
                })
            else
                messages(ToastMessage.ServerError)
        },
        deleteContactUs(id, index){
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
                        this.requests.splice(index, 1)
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
                        نام و نام خانوادگی
                    </th>
                    <th>
                        شماره همراه
                    </th>
                    <th>
                        عملیات
                    </th>
                    <th>
                        تاریخ ثبت
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in requests" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.full_name }}</td>
                    <td>{{ item.mobile }}</td>
                    <td>
                        <button @click="showDescription(item.id)" class="btn btn-sm btn-primary">
                            مشاهده توضیحات
                        </button>
                        <button @click="deleteContactUs(item.id)" class="btn btn-sm btn-danger mx-1">
                            حذف
                        </button>
                    </td>
                    <td>{{ new Date(item.created_at).toLocaleDateString('fa-IR') }}</td>
                </tr>
            </tbody>
        </table>
        <p class="text-center title" v-if="requests.length == 0">
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