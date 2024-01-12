<script>
import Card from '@/components/Card.vue'
import ProjectEditForm from '@/forms/project/edit.form.vue'
export default defineComponent({
    name: 'ProjectEditPage',
    components:{
        Card,
        ProjectEditForm
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
                مدیریت پروژه ها - ویرایش
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'ویرایش پروژه'">
                <ProjectEditForm />
            </Card>
        </div>
    </div>
</template>