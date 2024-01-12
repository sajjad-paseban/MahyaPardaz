<script>
import Card from '@/components/Card.vue'
import PostCreateForm from '@/forms/post/create.form.vue'
export default defineComponent({
    name: 'PostCreatePage',
    components:{
        Card,
        PostCreateForm
    },
    data(){
        return {
            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/post'
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
                مدیریت پست ها - جدید
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'پست جدید'">
                <PostCreateForm />
            </Card>
        </div>
    </div>
</template>