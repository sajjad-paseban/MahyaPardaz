<script>
import ProjectDataGrid from '@/datagrid/project.datagrid.vue'
import Card from '@/components/Card.vue'
export default defineComponent({
    name: 'ProjectIndexPage',
    components:{
        Card,
        ProjectDataGrid
    },
    data(){
        return {
            buttons: [
                {title: 'پروژه جدید', link: '/admin/project/create'}
            ]
        }
    },
    beforeCreate(){
        definePageMeta({
            layout: 'admin-panel'
        })
    }
})
</script>

<template>
    <div class="custom-row justify-content-end">
        <div class="col-auto title mx-4">
            <h2>
                مدیریت پروژه ها
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'لیست پروژه ها'">
                <ProjectDataGrid />     
            </Card>
        </div>
    </div>
</template>