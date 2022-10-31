<template>
  <div class="viewport">
    <NavigationBar/>
    <div class="background-image">
      <div class="content">
        <div class="text">
          Cakes
          <hr>
        </div>
      </div>
    </div>
      <div class="product-grid">
        <div class="grid-item">
          <img src="../../assets/cake1.jpg">
          Capp. Cheesecake <br> <span>RM 79.99</span>
        </div>
        <div class="grid-item">
          <img src="../../assets/cake2.jpg">
          Croissant <br> <span>RM 6.80</span>
        </div>
        <div class="grid-item">
          <img src="../../assets/cake3.jpg">
          Black Forest <br> <span>RM 73.90</span>
        </div>
        <div class="grid-item">
          <img src="../../assets/cake4.jpg">
          Maple Oat Muffin <br> <span>RM 4.20</span>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue"
export default {
  components: {
    NavigationBar,
  }
}
</script>

<style scoped>
.viewport {
  background-color: rgb(247,247,247);
  height: 300vh;
  width: 100%;
}

.background-image {
  width: 100%;
  border-top: 3px solid rgb(104,79,64);
  border-bottom: 3px solid rgb(104,79,64);
  height: 300px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.content {
  min-height: 100%;
  filter: brightness(100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: url("../../assets/product1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(50%);
  opacity: 0.9;
}

.text {
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 4px;
  color: white;
  text-transform: uppercase;
}

hr {
  width: 60%;
  margin: auto;
  height: 5px;
  background-color: white;
}

.product-grid {
  height: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 18% 18% 18% 18%;
  grid-template-rows: 400px 400px 400px 400px;
  column-gap: 30px;
  padding-top: 150px;
  justify-items: center;
  justify-content: center;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgb(104, 79, 64);
  width: 100%;
  height: 360px;
  padding: 5px;
  text-transform: uppercase; 
  text-align: center;
  color: #684f40;
  line-height: 30px;
  font-weight: 700;
}

img {
  width: 100%;
}

.grid-item span {
  color: rgb(253,184,34);
}

</style>