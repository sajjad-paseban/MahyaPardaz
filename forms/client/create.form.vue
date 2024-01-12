<script>

import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import * as yup from 'yup'
import Input from '@/components/form/Input.vue'
import FileUpload from '@/components/form/FileUpload.vue'
import { create } from '@/services/client.service'
import Swal from 'sweetalert2'
export default defineComponent({
    name: 'ClientCreateForm',
    data(){

        //validation with yup
        const schema = yup.object({
            title: yup.string().required("فیلد نام مشتری اجباری می باشد"),
        })

        return {
            form:{
                schema,
                params:{
                    title: null,
                    image: null
                },
                errors: null,
                disable: false
            },
        }
    },
    methods: {
        async handleSubmit(form, {resetForm}){
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
                navigateTo('/admin/client')
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
        FileUpload
    }
})
</script>

<template>
    <Form :validation-schema="form.schema" @submit="handleSubmit" class="p-2">
        <div class="form-group">
            <Input @model="val => form.params.title = val" :value="form.params.title" label="نام مشتری" :dataLang="'fa'" name="title" id="title" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="title" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.title">
                {{ form.errors?.title[0] }}
            </span>
        </div>

        <div class="form-group my-2">
            <FileUpload @model="val => form.params.image = val" :value="form.params.image" label="آپلود فایل" :dataLang="'fa'" name="image" id="image" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.image">
                {{ form.errors?.image[0] }}
            </span>
        </div>
        
        <div class="row mt-4  justify-content-start">
            <div class="col-auto">
                <button class="btn btn-sm btn-outline-primary" :class="{disabled: form.disable}" type="submit" role="button">
                    ثبت مشتری
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