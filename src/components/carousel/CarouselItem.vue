<template>
    <div class="carousel-item">
        <img :src="slide" v-show="currentSlide === index"/>
    </div>
</template>

<script>
export default {
    props: ['slide','currentSlide','index']
}
</script>

<style scoped>
.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
