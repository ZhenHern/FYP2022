<template>
  <div class="viewport">
    <NavigationBar @changeCategory="changeCategory($event)"/>
    <ProductContent :category="activeCategory" :key="componentKey"/>  
  </div>

</template>

<script>
import NavigationBar from "./NavigationBar.vue"
import ProductContent from "./ProductContent.vue"

export default {
  components: {
    NavigationBar,
    ProductContent
  },
  data() {
    return {
      activeCategory: 1,
      tcomponentKey: 0
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
  background-color: rgb(247,247,247);
  height: fit-content;
  width: 100%;
}
</style>