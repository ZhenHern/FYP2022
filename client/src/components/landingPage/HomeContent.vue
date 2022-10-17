<template>
    <div class="content">
        <div class="title">
          Home Page
        </div>
        <div class="picture">
        </div>
        <div class="carousel-slide">
            <Carousel>
          </Carousel>
          </div>
      </div>
</template>

<script>
import Carousel from "../carousel/Carousel.vue";



export default {
  name: "HomeContent",
  components: {Carousel},
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

.carousel-slide {
  position: absolute;
  margin-top: 1%;
  top: 22%;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.picture {
  background-image: url(../../assets/landingpage1.jpg);
  opacity: 65%;
  position: absolute;
  margin-top: 1%;
  top: 22%;
  width: 100%;
  height: 50%;
}

.slide-info {
  max-width: 50%;
  margin-left: 25%;
}


</style>