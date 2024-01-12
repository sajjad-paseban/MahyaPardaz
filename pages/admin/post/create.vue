<script>
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import PostCreateForm from '@/forms/post/create.form.vue'
import UploadMediaForm from '@/forms/post/upload-media.form.vue'
export default defineComponent({
    name: 'PostCreatePage',
    components:{
        Card,
        Modal,
        PostCreateForm,
        UploadMediaForm
    },
    data(){
        return {
            uploadFileModal:{
                buttons: [
                    {
                        title: 'بستن',
                        onClick: () => this.uploadFileModal.showModal = false
                    }
                ],
                title: 'آپلود فایل',
                showModal: false    
            },

            buttons: [
                {
                    title: 'برگشت',
                    link: '/admin/post'
                },
                {
                    title: 'آپلود فایل',
                    onClick: () => this.uploadFileModal.showModal = true
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
    <Modal v-if="uploadFileModal.showModal" :title="uploadFileModal.title" :buttons="uploadFileModal.buttons">
        <UploadMediaForm />
    </Modal>
</template>