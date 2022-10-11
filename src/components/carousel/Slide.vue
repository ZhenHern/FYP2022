<template>
  <div class="slide" v-for="(slide, index) in carouselSlides" :key="index">
    <transition name="slide">
      <img v-show="currentSlide == index" :src="require(`../../assets/${slide}.jpg`)">
    </transition>
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
  border: 3.5px solid rgb(228, 186, 163);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.slide-enter-from, 
.slide-leave-to {
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>