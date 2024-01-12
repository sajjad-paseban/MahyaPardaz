<script>
    export default defineComponent({
        name: 'ServiceCard',
        props: {
            isActive:{
                type: Boolean,
                default: false
            },
            title: {
                type: String,
            },
            description: {
                type: String,
            }
        }
    })
</script>

<template>
    <div class="item p-4" :class="{active: isActive}">
        <h4>
            {{ title }}
        </h4>
        <p>
            {{ description }}
        </p>
    </div>
</template>

<style scoped lang="scss">
    .item{
        background-color: linear-gradient(127deg, #fff 0%, #fff 91%);
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.06);
        border-radius: 40px 40px 4px 40px;
        width: calc(40.5% - 20px);
        min-height: 180px;
        max-height: 250px;
        margin: 10px;
        direction: rtl;
        font-family: 'yekan';
        &.active{
            background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
            color: #F7F8FF;
            p{
                color: #F7F8FF;
            }
        }
        
        p{
            font-size: 15px;
            text-align: justify;
            line-height: 1.5;
            color: #6F8BA4;
        }
    }
   
    @media screen and (max-width: 550px) {
        .item{
            margin: 10px 30px !important;
            width: calc(100% - 100px) !important;
        }
    }
</style>