<script>
    import { Field } from 'vee-validate'
    export default defineComponent({
        name: 'TextareaFormComponent',
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
    <Field as="textarea" @input="handleModel" :value="value" class="d-block mt-1" rows="5" :name="name" :id="id" :data-lang="dataLang" :placeholder="placeholder"></Field>
</template>


<style lang="scss" scoped>
    textarea{
        border: 1px solid rgba($color: #000000, $alpha: 0.2);
        border-radius: 3px;
        padding: 10px;
        color: #3B566E;
        width: calc(100% - 20px);
        resize: none;
    }
    label{
        color: #3B566E;
    }
    textarea:focus{
        outline: 1px solid #384DFF;
        background-color: rgb(232, 240, 254);
    }
    textarea[data-lang="en"]{
        font-family: calibri;
        font-size: 15px;
    }
    textarea[data-lang="fa"]{
        font-family: 'vazir';
        direction: rtl;
        font-size: 15px;
    }
</style>