<template>
  <div class="viewport">
    <NavigationBar @changeCategory="changeCategory($event)"/>
    <ProductContent :category="activeCategory" :key="componentKey"/>  
    <WebsiteFooter/>
  </div>

</template>

<script>
import NavigationBar from "./NavigationBar.vue"
import ProductContent from "./ProductContent.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"

export default {
  components: {
    NavigationBar,
    ProductContent,
    WebsiteFooter
  },
  data() {
    return {
      activeCategory: 1,
      componentKey: 0
    }
  },
  methods: {
    changeCategory(activeCategory) {
      this.activeCategory = activeCategory
      this.componentKey += 1
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