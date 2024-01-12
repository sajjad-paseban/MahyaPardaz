<script>
import { get_projects, deleteOne } from '@/services/project.service'
import Swal from 'sweetalert2'
import { ToastMessage } from '~/helpers/enum'
import { api_base_url, messages } from '~/helpers/function'
export default defineComponent({
    name: 'project-datagrid',
    data(){
        return {
            api_base_url: api_base_url(),
            projects: []
        }
    },
    async beforeCreate(){
        const res = await get_projects().then(res => res)
        if(res && res.status == 200)
            this.projects = res.data.entities.products
        else
            messages(ToastMessage.ServerError)
    },
    components:{
        
    },
    methods:{
        showDescription(text){
            Swal.fire({
                text,
                confirmButtonText: 'باشه'
            })
        },
        deleteProject(id, index){
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
                        this.projects.splice(index, 1)
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
                        عنوان
                    </th>
                    <th>
                        تصویر پروژه
                    </th>
                    <th>
                        توضیحات
                    </th>
                    <th>
                        عملیات
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in projects" :key="index">
                    <td>{{ projects.length - index }}</td>
                    <td>{{ item.title }}</td>
                    <td>
                        <a :href="api_base_url + item.image" target="_blank" class="button-8" role="button">
                            مشاهده تصویر
                        </a>
                    </td>
                    <td>
                        <button @click="showDescription(item.short_description)" class="button-16" role="button">
                            مشاهده توضیحات
                        </button>
                    </td>
                    <td>
                        <nuxt-link :to="'/admin/project/'+item.slug" class="btn btn-sm btn-primary">
                            مشاهده
                        </nuxt-link>
                        <button @click="deleteProject(item.id)" class="btn btn-sm btn-danger mx-1">
                            حذف
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="text-center title" v-if="projects.length == 0">
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