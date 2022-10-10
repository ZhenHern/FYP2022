<template>
  <div class="carousel">
    <div class="navigate">
      <div class="toggle-page left">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i class="fas fa-chevron-right  "></i>
      </div>
    </div>
    <slot :currentSlide="currentSlide"/>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
  name: "CarouselComponent",
  data() {
    return {
      currentSlide: ref(1)
    }
  }
}
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 80%;
  margin-top: 6%;
  justify-content: center;
  align-items: center;
}

.navigate {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
</style>