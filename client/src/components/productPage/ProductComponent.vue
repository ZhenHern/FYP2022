<template>
  <div class="viewport">
    <NavigationBar @changeComponent="activeComponent=$event" :activeComponent="activeComponent"/>
    <component :is="activeComponent"></component>  
  </div>

</template>

<script>
import NavigationBar from "./NavigationBar.vue"
import CakeComponent from "./CakeComponent.vue"
import CookieComponent from "./CookieComponent.vue"
import BreadComponent from "./BreadComponent"

export default {
  components: {
    NavigationBar,
    CakeComponent,
    CookieComponent,
    BreadComponent
  },
  data() {
    return {
      activeComponent: "CakeComponent"
    }
  }
}
</script>

<style scoped>
.viewport {
  background-color: rgb(247,247,247);
  height: 300vh;
  width: 100%;
}
</style>