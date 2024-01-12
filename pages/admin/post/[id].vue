<script>
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import PostEditForm from '@/forms/post/edit.form.vue'
import UploadMediaForm from '@/forms/post/upload-media.form.vue'
export default defineComponent({
    name: 'PostEditPage',
    components:{
        Card,
        Modal,
        PostEditForm,
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
                مدیریت پست ها - ویرایش
            </h2>
        </div>
    </div>
    <div class="custom-row justify-content-center">
        <div class="col-10">
            <Card :headerBordering="false" :buttons="buttons" :title="'ویرایش پست'">
                <PostEditForm />
            </Card>
        </div>
    </div>
    <Modal v-if="uploadFileModal.showModal" :title="uploadFileModal.title" :buttons="uploadFileModal.buttons">
        <UploadMediaForm />
    </Modal>
</template>