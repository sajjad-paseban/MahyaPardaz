<script>
    export default defineComponent({
        name: 'CardInfo',
        props: ['title','amount','dataColor','component']
    })
</script>

<template>
    <div class="card-info">
        <div class="card-info-header">
            <h5>
                {{ title }}
            </h5>
        </div>
        <div class="card-info-body" :data-color='dataColor'>
            <div>
                <span>
                    {{ amount }}
                </span>
            </div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$default-white: #fff;
$border-color: #e6ecf5;
$md-green-100: #c8e6c9;
$md-green-400: #66bb6a;
$md-red-100: #ffcdd2;
$md-red-400: #ef5350;
$md-orange-100: #ffe0b2;
$md-orange-400: #ffa726;
$md-blue-100: #bbdefb;
$md-blue-400: #42a5f5;
.card-info{
    position: relative;
    font-family: vazir !important;
    padding: 0 15px;
    background-color: $default-white;
    border-radius: 10px;
    transition: all 200ms;
    border: 1px solid $border-color;
    margin: 0px 0;
    color: #3B566E;
    user-select: none;
    &:hover{
        transform: scale(1.02);
        box-shadow: 0px 2px 5px rgba($color: #000000, $alpha: 0.2);
    }
    .card-info-header{
        h5{
            font-size: 15px;
            text-align: right;
        }
    }
    .card-info-body{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'yekan' !important;
        padding-bottom: 10px;
        span{
            padding: 5px 10px;
            border-radius: 50px;
            font-size: 20px;
        }
        svg{
            font-size: 50px;
        }
        &[data-color=success]{
            span{
                background-color: $md-green-100;   
            }
            svg{    
                color: $md-green-400;
            }
        }
        
        &[data-color=danger]{
            span{
                background-color: $md-red-100;
            }
            svg{    
                color: $md-red-400;
            }
        }
        
        &[data-color=warning]{
            span{
                background-color: $md-orange-100;
            }
            svg{    
                color: $md-orange-400;
            }
        }

        &[data-color=primary]{
            span{
                background-color: $md-blue-100;
            }
            svg{    
                color: $md-blue-400;
            }
        }
    }
}

</style>