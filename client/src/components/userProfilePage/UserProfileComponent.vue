<template>
  <div class="viewport">
    <NavigationBar @changeCategory="changeCategory($event)"/>
    <div class="container">
      <div class="content" @click="test">
        <UserProfileMenu @component="currentTabComponent = $event" ref="menu"/>
        <component v-bind:is="currentTabComponent" @save="rerenderMenu"></component>
      </div>
    </div>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../productPage/NavigationBar.vue"
import UserProfileMenu from "../userProfilePage/UserProfileMenu.vue"
import MyProfile from "./MyProfile.vue"
import ChangePassword from "./ChangePassword.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"

export default {
  components: {
    NavigationBar,
    UserProfileMenu,
    MyProfile,
    ChangePassword,
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
  height: 540px;
}

.content {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 100%;
  padding-top: 20px;
}

@media (max-width: 1200px) {
  .content {
    width: 800px;
  }
}

@media (max-width: 900px) {
  .content {
    width: 550px;
  }
}

@media (max-width: 600px) {
  .content {
    width: 80%
  }
}
</style>