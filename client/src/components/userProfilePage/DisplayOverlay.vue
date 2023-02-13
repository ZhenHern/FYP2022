<template>
  <div class="overlay" @click="closeOverlay()" ref="overlay">
    <div class="popup">
      <div class="popup-text">
        <i class="fa-regular fa-circle-check" v-if="!error"></i>
        <i class="fa-regular fa-circle-xmark" v-else></i>
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      error: false
    }
  },
  methods: {
    closeOverlay() {
      this.$refs.overlay.style.display = "none"
    },
    openOverlay(text) {
      this.error = false
      this.text = text
      this.$refs.overlay.style.display = "block"
    },
    openErrorOverlay(text) {
      this.error = true
      this.text = text
      this.$refs.overlay.style.display = "block"   
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: none;
  z-index: 2;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 35px;
  color: black;
  transform: translate(-50%,-50%);
}

.popup-text {
  width: 550px;
  height: 200px;
  padding: 30px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

i.fa-regular.fa-circle-check {
  margin-right: 20px;
  color: rgb(71, 201, 71);
}

i.fa-regular.fa-circle-xmark {
  margin-right: 20px;
  color: rgb(220, 20, 20);
}
</style>