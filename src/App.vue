<template>
  <section>
    <NavigationBar/>
      <div class="content">
        <div class="info">
          <p>One of the most famous online bakery shop</p>
        </div>
      </div>
  </section>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar
  }
}
</script>

<style>

</style>
