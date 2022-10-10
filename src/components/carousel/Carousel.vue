<template>
  <div class="carousel">
    <div class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left fa-3x"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right fa-3x"></i>
      </div>
    </div>
    <div class="pagination">
      <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index" :class="{active : index  === currentSlide }">
        
      </span>  
    </div>

    <Slide :currentSlide="currentSlide"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Slide from "./Slide.vue";

export default {
  name: "CarouselComponent",
  components: {Slide},
  setup() {
    const currentSlide = ref(0);
    const getSlideCount = ref(null);

    const nextSlide = () => {
      if (currentSlide.value + 1 === getSlideCount.value) {
        currentSlide.value = 0;
        return;
      }
      currentSlide.value += 1;
    }

    const prevSlide = () => {
      if (currentSlide.value === 0) {
        currentSlide.value = getSlideCount.value - 1;
        return;
      }
      currentSlide.value -= 1;
    }

    const goToSlide = (index) => {
      currentSlide.value = index;
    }



    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length;
      console.log(getSlideCount.value)
    })

    return { currentSlide, getSlideCount, nextSlide, prevSlide, goToSlide};
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 80%;
}

.navigate {
  position: absolute;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  margin-left: 15%;
}

.toggle-page {
  display: flex;
  flex: 1;
}

.right {
  justify-content: flex-end;
}

i {
  color: azure;
  cursor: pointer;
}

.pagination {
  position: absolute;
  height: 3%;
  width: 100%;
  bottom: 5%;
  display: flex;
  justify-content: center;
  gap: 16px;
}

span {
  z-index: 3;
  cursor: pointer;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0,1), 0 1px 2px 0 rgba(0,0,0,0.06);
}

.active {
  background-color: rgba(160, 97, 84, 0.986);
}



</style>