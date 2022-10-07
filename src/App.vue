<template>
  <MyCarousel />
</template>

<script>
import MyCarousel from "./components/carousel/Carousel.vue";

export default {
  name: "App",
  components: {MyCarousel},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
