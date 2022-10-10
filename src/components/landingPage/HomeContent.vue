<template>
    <div class="content">
        <div class="title">
          Home Page
        </div>
        <div class="picture">
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
  justify-content: center;
  align-items: center;
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


</style>