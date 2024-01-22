<script>

import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import * as yup from 'yup'
import Input from '@/components/form/Input.vue'
import FileUpload from '@/components/form/FileUpload.vue'
import { create, get_clients } from '@/services/client.service'
import Swal from 'sweetalert2'
import { get_projects } from '@/services/project.service'
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
                    image: null,
                    selected: false,
                    product_ids: []
                },
                errors: null,
                disable: false
            },
            projects: []
        }
    },
    methods: {
        selectProject(id,index){
            if(this.$refs.project_checkbox[index].checked){
                this.form.params.product_ids.push(id)
            }else{
                const index_pos = this.form.params.product_ids.findIndex(value => value == id)
                this.form.params.product_ids.splice(index_pos, 1)
            }
            console.log(this.form.params.product_ids)
        },
     
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
        FileUpload,
    },
    async mounted(){
        const products = await get_projects().then(res => res)
        this.projects = products.data.entities.products
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
        <div class="form-group my-3" dir="rtl">
            <input type="checkbox" v-model="form.params.selected" name="selected" id="selected">
            <label for="selected" class="d-inline-block" style="position: relative;bottom: 2px;">
                مشتری منتخب
            </label>
        </div>
        <div class="form-group my-2">
            <FileUpload @model="val => form.params.image = val" :value="form.params.image" label="آپلود فایل" :dataLang="'fa'" name="image" id="image" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.image">
                {{ form.errors?.image[0] }}
            </span>
        </div>

        <div class="form-group my-2">
            <fieldset class="rounded" dir="rtl">
                <legend>لیست محصولات</legend>
                <div v-for="(project, index) in projects" :key="index">
                    <input type="checkbox" @click="selectProject(project.id, index)" ref="project_checkbox" :id="'project'+index">
                    <label :for="'project'+index">
                        {{ project.title }}
                    </label>
                </div>
            </fieldset>
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.product_ids">
                {{ form.errors?.product_ids[0] }}
            </span>
        </div>
        
        <div class="row mt-4 justify-content-start">
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