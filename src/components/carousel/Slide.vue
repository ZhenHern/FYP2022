<template>
  <div class="slide" v-for="(slide, index) in carouselSlides" :key="index">
    <img v-show="currentSlide == index" :src="require(`../../assets/${slide}.jpg`)">
  </div>
</template>

<script>
export default {
  name: "SlideComponent",
  props: {
    currentSlide: Number
  },
  data() {
    return {
      carouselSlides: ["slide1","slide2","slide3"] ,
      slideCounts: 0
    }
  }
}
</script>

<style scoped>
.slide {
  display: flex;
  justify-content: center;
  
}

img {
  position: absolute;
  min-width: 50%;
  max-width: 80%;
  max-height: 100%;
  min-height: 100%;
  object-fit: cover;
}
</style>