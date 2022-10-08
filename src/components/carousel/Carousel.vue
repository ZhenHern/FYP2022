<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselItem v-for="(slide,index) in slides" :key="slide" :slide="slide" :currentSlide="currentSlide" :index="index"/>
      <CarouselControls/>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";

export default {
  name: "MyComponent",
  components: {CarouselItem,CarouselControls},
  data() {
    return {
      slides: [
        require("../../assets/jisoo1.jpg"),
        require("../../assets/logo.png")
      ],
      currentSlide: 0,
      slideInterval: null
    }
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    }, 3000)
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  }
  
}
</script>

<style scoped>
  .carousel-inner {
    position: relative; 
  }
</style>

