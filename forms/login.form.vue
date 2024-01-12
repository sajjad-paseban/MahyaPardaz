<script>
import { Form, ErrorMessage } from 'vee-validate'
import { defineComponent } from "vue"
import * as yup from 'yup'
import Email from '@/components/form/Email.vue'
import Password from '@/components/form/Password.vue'
import { login } from '@/services/index.service'
import Swal from 'sweetalert2'
export default defineComponent({
    name: 'LoginForm',
    data(){

        //validation with yup
        const schema = yup.object({
            email: yup.string().required("فیلد پست الکترونیکی اجباری می باشد").email("پست الکترونیکی معتبر نمی باشد"),
            password: yup.string().required("فیلد گذرواژه اجباری می باشد")
        })

        return {
            form:{
                schema,
                params:{
                    email: null,
                    password: null
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

            const res = await login(form).then(res => res)
            
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
            
            if(res && res.status == 200){
                Toast.fire({title: res.data.message, icon:"success"})
                resetForm()
                localStorage.setItem('SESS_COK',JSON.stringify(
                    {
                        key: null,
                        status: true
                    }
                ))
                navigateTo('/admin')
            }else{
                this.form.errors = res.data.errors
                Toast.fire({title: res.data.message, icon:"error"})
                
            }

            this.form.disable = false

        }
    },
    components: {
        Form,
        ErrorMessage,
        Email,
        Password,
    }
})
</script>

<template>
    <Form :validation-schema="form.schema" @submit="handleSubmit" class="p-2">
        <h2>
            ورود به سامانه مدیریت
        </h2>
        <div class="form-group">
            <Email @model="val => form.params.email = val" :value="form.params.email" label="پست الکترونیکی" :dataLang="'fa'" name="email" id="email" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="email" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.email">
                {{ form.errors?.email[0] }}
            </span>
        </div>

        <div class="form-group my-2">
            <Password @model="val => form.params.password = val" :value="form.params.password" label="گذرواژه" :dataLang="'fa'" name="password" id="password" />
            <ErrorMessage class="text-danger d-block" style="text-align: right;" name="password" />
            <span style="font-size: 12px;direction: rtl;" class="text-danger d-block" v-if="form.errors?.password">
                {{ form.errors?.password[0] }}
            </span>
        </div>
        
        <div class="row mt-4  justify-content-start">
            <div class="col-auto">
                <button class="btn btn-sm btn-outline-primary" :class="{disabled: form.disable}" type="submit" role="button">
                    ورود
                </button>
            </div>
        </div>
    </Form>
</template>

<style scoped lang="scss">
    form{
        color: #3B566E;
        font-family: 'vazir';

        h2{
            font-family: 'yekan';
        }
    }
    span[role=alert]{
        font-size: 12px;
        margin: 4px 0;
    }
</style>