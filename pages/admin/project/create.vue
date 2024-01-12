<script>
import Card from '@/components/Card.vue'
import ProjectCreateForm from '@/forms/project/create.form.vue'
export default defineComponent({
    name: 'ProjectCreatePage',
    components:{
        Card,
        ProjectCreateForm
    },
    data(){
        return {
            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/project'
                }
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
                مدیریت پروژ ها - جدید
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'پروژه جدید'">
                <ProjectCreateForm />
            </Card>
        </div>
    </div>
</template>