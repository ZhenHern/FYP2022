<template>
  <div class="viewport">
    <NavigationBar />
    <ProductContent :category="activeCategory" :key="componentKey"/> 
    <WebsiteFooter/>
  </div>

</template>

<script>
import NavigationBar from "../navigationBar/NavigationBar.vue"
import ProductContent from "./ProductContent.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"

export default {
  components: {
    NavigationBar,
    ProductContent,
    WebsiteFooter,
  },
  beforeMount() {
    if (this.$storage.getStorageSync("loginID") != undefined) {
      this.activeteActivityTracker()
    }
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.userActivityThrottler);
    window.removeEventListener("scroll", this.userActivityThrottler);
    window.removeEventListener("keydown", this.userActivityThrottler);
    window.removeEventListener("resize", this.userActivityThrottler);
  
    clearTimeout(this.userActivityTimeout);
    clearTimeout(this.userActivityThrottlerTimeout);
  },
  data() {
    return {
      activeCategory: 1,
      componentKey: 0,
      userActivityTimeout: null,
      userActivityThrottlerTimeout: null
    }
  },
  methods: {
    changeCategory(activeCategory) {
      this.activeCategory = activeCategory
      this.componentKey += 1
    },
    activeteActivityTracker() {
      window.addEventListener("mousemove", this.resetUserActivityTimeout)
      window.addEventListener("scroll", this.resetUserActivityTimeout)
      window.addEventListener("keydown", this.resetUserActivityTimeout)
      window.addEventListener("resize", this.resetUserActivityTimeout)
    },
    resetUserActivityTimeout() {
      clearTimeout(this.userActivityTimeout)
      this.userActivityTimeout = setTimeout(() => {
        this.inactiveUserAction()
      }, 900000)
    },
    userActivityThrottler() {
      if (!this.userActivityThrottlerTimeout) {
        this.userActivityThrottlerTimeout = setTimeout(() => {
          this.resetUserActivityTimeout();

          clearTimeout(this.userActivityThrottlerTimeout);
          this.userActivityThrottlerTimeout = null;
        }, 1000);
      }
    },
    inactiveUserAction() {
      console.log("EXPIRED LIAO")
      this.$storage.clearStorageSync("loginID");
      this.$storage.clearStorageSync("userProfile");
    }
  }
}
</script>

<style scoped>
.viewport {
  position: relative;
  background-color: rgb(247,247,247);
  height: fit-content;
  width: 100%;
}
</style>