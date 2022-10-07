<template>
  <div class="carousel">
    <div class="carousel-inner">
        <CarouselItem v-for="(slide,index) in slides" :key="slide" :slide="slide" :currentSlide="currentSlide" :index="index"/>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";

export default {
  name: "MyComponent",
  components: {CarouselItem},
  data() {
    return {
      slides: [
        require("../../assets/jisoo1.jpg"),
        require("../../assets/logo.png")
      ],
      currentSlide: 1
    }
  }
}
</script>
