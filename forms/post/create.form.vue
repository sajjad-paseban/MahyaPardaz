<script>

import * as yup from 'yup'
import Swal from 'sweetalert2'
import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import Input from '@/components/form/Input.vue'
import FileUpload from '@/components/form/FileUpload.vue'
import TextArea from '@/components/form/Textarea.vue'
import CustomEditor from '~/editor/custom.editor.vue'
import { create } from '@/services/blog.service'
import VueTags from '@/components/VueTags.vue'

export default defineComponent({
    name: 'ProjectCreateForm',
    data(){

        //validation with yup
        const schema = yup.object({
            title: yup.string().required("فیلد عنوان پست اجباری می باشد"),
            short_description: yup.string().required("فیلد توضیحات اجباری می باشد"),
        })

        return {
            form:{
                schema,
                params:{
                    title: null,
                    short_description: null,
                    content: null,
                    keywords: [],
                    image: null,
                },
                errors: null,
                disable: false
            },
        }
    },
    methods: {
        async handleSubmit(form, {resetForm}){
            this.form.params.content = tinymce.get('editor').getContent()
            this.form.disable = true
            this.form.errors = null
            
            const res = await create(this.form.params).then(res => res)
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-left',
                showConfirmButton: false,
                timer: 8000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            })

            if(res.status == 201){
                Toast.fire({title: res.data.message, icon:"success"})
                resetForm()
                navigateTo('/admin/post')
            }else{
                this.form.errors = res.data.errors
            }

            this.form.disable = false

        }
    },
    components: {
        Form,
        ErrorMessage,
        Input,
        FileUpload,
        TextArea,
        CustomEditor,
        VueTags
    }
})
</script>

<template>
    <Form :validation-schema="form.schema" @keydown.enter="$event.preventDefault()" @submit="handleSubmit" class="p-2">
        <div class="form-group">
            <Input @model="val => form.params.title = val" :value="form.params.title" label="عنوان پست" :dataLang="'fa'" name="title" id="title" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="title" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.title">
                {{ form.errors?.title[0] }}
            </span>
        </div>
        <div class="form-group my-3">
            <FileUpload @model="val => form.params.image = val" :value="form.params.image" label="آپلود تصویر" :dataLang="'fa'" name="image" id="image" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.image">
                {{ form.errors?.image[0] }}
            </span>
        </div>
        <div class="form-group my-3">
            <TextArea @model="val => form.params.short_description = val" :value="form.params.short_description" label="توضیحات" :dataLang="'fa'" name="short_description" id="short_description" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="short_description" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.short_description">
                {{ form.errors?.short_description[0] }}
            </span>
        </div>
        <div class="form-group my-3">
            <VueTags 
                :tags="form.params.keywords"
                @tags-changed="newTags => form.params.keywords = newTags"/>
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.keywords">
                {{ form.errors?.keywords[0] }}
            </span>
        </div>
        <div class="form-group">
            <CustomEditor />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.content">
                {{ form.errors?.content[0] }}
            </span>
        </div>
        
        <div class="row mt-4  justify-content-start">
            <div class="col-auto">
                <button class="btn btn-sm btn-outline-primary" :class="{disabled: form.disable}" type="submit" role="button">
                    ثبت پست
                </button>
            </div>
        </div>
    </Form>
</template>

<style scoped lang="scss">
    span[role=alert]{
        font-size: 12px;
        margin: 4px 0;
    }
</style>