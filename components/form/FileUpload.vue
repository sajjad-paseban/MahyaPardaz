<script>
    export default defineComponent({
        name: 'FileUploadFormComponent',
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
        },
        methods: {
            handleModel(e){
                this.$emit('model', e.target.files[0])
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
    <input type="file" @change="handleModel" accept="image/*" class="d-block sm mt-1" :name="name" :id="id"  :data-lang="dataLang" :placeholder="placeholder" />
    
</template>

<style lang="scss" scoped>
    input{
        border: 1px solid rgba($color: #000000, $alpha: 0.2);
        border-radius: 3px;
        padding: 10px;
        color: #3B566E;
        width: calc(100% - 20px);
    }
    label{
        color: #3B566E;
    }
    input:focus{
        outline: 1px solid #384DFF;
        background-color: rgb(232, 240, 254);
    }
    input[data-lang="en"]{
        font-family: calibri;
        font-size: 15px;
    }
    input[data-lang="fa"]{
        font-family: 'vazir';
        direction: rtl;
        font-size: 15px;
    }
</style>