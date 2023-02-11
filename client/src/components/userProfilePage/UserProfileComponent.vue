<template>
  <div class="viewport">
    <NavigationBar @changeCategory="changeCategory($event)"/>
    <div class="container">
      <div class="content" @click="test">
        <UserProfileMenu @component="currentTabComponent = $event"/>
        <component v-bind:is="currentTabComponent"></component>
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
      currentTabComponent: "MyProfile"
    }
  },
  methods: {
  },
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
  height: 650px;
}

.content {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 100%;
  padding-top: 20px;
}
</style>