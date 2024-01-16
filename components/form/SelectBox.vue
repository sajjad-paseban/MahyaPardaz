<script>
    import { Field } from 'vee-validate'
    export default defineComponent({
        name: 'InputFromComponent',
        props: {
            label:{
                type: String
            },
            name:{
                type: String 
            },
            id: {
                type: String
            },
            dataLang:{
                type: String,
                default: 'en'
            },
            placeholder:{
                type: String,
            },
            value:{
                type: String
            }
        },
        components:{
            Field
        },
        methods: {
            handleModel(e){
                this.$emit('model', e.target.value)
            }
        }
    })
</script>

<template>
    <div class="d-flex" :class="{'justify-content-end': dataLang == 'fa', 'justify-content-start': dataLang == 'en'}">
        <label :for="id">
            {{ label }}
        </label>
    </div>
    <Field as="select" @input="handleModel" v-model="value" class="d-block mt-1" :name="name" :id="id" :data-lang="dataLang" :placeholder="placeholder">
        <slot />
    </Field>
    
</template>

<style lang="scss" scoped>
    select{
        border: 1px solid rgba($color: #000000, $alpha: 0.2);
        border-radius: 3px;
        padding: 10px;
        color: #3B566E;
        width: 100%;
    }
    label{
        color: #3B566E;
    }
    select:focus{
        outline: 1px solid #384DFF;
        background-color: rgb(232, 240, 254);
    }
    select[data-lang="en"]{
        font-family: calibri;
        font-size: 15px;
    }
    select[data-lang="fa"]{
        font-family: 'vazir';
        direction: rtl;
        font-size: 15px;
    }
</style>