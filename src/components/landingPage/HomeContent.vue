<template>
    <div class="content">
        <div class="title">
          Home Page
        </div>
        <div class="picture">
          <Carousel v-slot={currentSlide}>
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
              <div v-show="currentSlide === index" class="slide-info">
                <img :src="require(`../../assets/${slide}.jpg`)">
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
</template>

<script>
import Carousel from "../carousel/Carousel.vue";
import Slide from "../carousel/Slide.vue";


export default {
  name: "HomeContent",
  components: {Carousel, Slide},
  data() {
    return {
      carouselSlides: ["slide1","slide2","slide3"]
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 1500px;
  min-height: 600px;
  display: flex;
}

.content .title  {
  position: relative;
  top: 70px;
  width: 100%;
  height: fit-content;
  margin-left: 43%;
  font-size: 40px;
  font-weight: 50%;
  text-transform: uppercase;
}

.picture {
  position: absolute;
  margin-top: 1%;
  top: 22%;
  width: 100%;
  height: 50%;
  display: flex;
  --bg-image: url(../../assets/landingpage1.jpg);
  --bg-image-opacity: 80%;
  flex-direction: row;
  justify-content: flex-start;
}

.picture::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: var(--bg-image-opacity);
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
}

.slide-info {
  max-width: 50%;
  margin-left: 25%;
}

img {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>