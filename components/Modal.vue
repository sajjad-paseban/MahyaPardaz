<script>
import Card from '@/components/Card.vue';
export default defineComponent({
    name: 'Modal',
    components: {
        Card
    },
    props: ['title','buttons'],
})
</script>

<template>
    <div class="cover"></div>
    <div class="custom-modal">
        <div class="custom-row justify-content-center my-5">
            <div class="col-10">
                <Card :title="title" :buttons="buttons">
                    <slot />
                </Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cover{
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    .custom-modal{
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        width: 100%;
    
        &::-webkit-scrollbar {
        width: 8px;
      }
      
        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        
        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: #3B566E; 
        border-radius: 5px;
        }
        
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        }

    }

    //just for admin panel
    @media screen and (min-width: 1200px) {
        .cover{
            width: calc(100% - 250px);
        }
        .custom-modal{
            width: calc(100% - 250px);
        }
    }
</style>