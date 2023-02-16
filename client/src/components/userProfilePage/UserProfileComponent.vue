<template>
  <div class="viewport">
    <NavigationBar @changeCategory="changeCategory($event)"/>
    <div class="container">
      <UserProfileMenu @component="currentTabComponent = $event" ref="menu"/>
      <component v-bind:is="currentTabComponent" @save="rerenderMenu"></component>
    </div>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../productPage/NavigationBar.vue"
import UserProfileMenu from "../userProfilePage/UserProfileMenu.vue"
import MyProfile from "./MyProfile.vue"
import ChangePassword from "./ChangePassword.vue"
import MyPurchase from "./MyPurchases.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"

export default {
  components: {
    NavigationBar,
    UserProfileMenu,
    MyProfile,
    ChangePassword,
    MyPurchase,
    WebsiteFooter
  },
  data() {
    return {
      currentTabComponent: "MyProfile",
      save: 0
    }
  },
  methods: {
    rerenderMenu() {
      this.$refs.menu.forceRerender()
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

.container {
  overflow: auto;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  padding-top: 20px;
}


@media (max-width: 1200px) {
  .container {
    width: 800px;
  }
}

@media (max-width: 900px) {
  .container {
    width: 550px;
  }
}

@media (max-width: 600px) {
  .container {
    width: 80%
  }
}
</style>