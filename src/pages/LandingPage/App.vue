<template>
  <section>
    <NavigationBar @changeComponent="activeComponent=$event"/>
    <component :is="activeComponent"></component>
  </section>
</template>

<script>
import NavigationBar from "../../components/landingPage/NavigationBar.vue";
import Home from "../../components/landingPage/HomeContent.vue";
import About from "../../components/landingPage/AboutContent.vue";


export default {
  name: "App",
  components: {
    NavigationBar,
    Home,
    About
  },
  data() {
    return {
      activeComponent: "Home"
    }
  }
}
</script>


