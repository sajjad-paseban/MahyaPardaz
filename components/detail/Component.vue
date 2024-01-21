<script setup>
    import DetailCard from '../detail/Card.vue'
</script>

<template>
    <div class="detail-section">
        <div class="row justify-content-center">
            <DetailCard number="250" title="مشتریان" />
            <DetailCard number="7" title="سامانه ها" />
            <DetailCard number="255" title="کارمندان" />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .detail-section{
        width: 100%;
        overflow: hidden;
        background-image: linear-gradient(127deg, #384DFF 0%, #579BE9 91%);
        color: #F7F8FF;
        font-family: 'yekan';
    }
</style>