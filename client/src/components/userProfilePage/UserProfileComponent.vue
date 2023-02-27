<template>
  <div class="viewport">
    <NavigationBar ref="navbar"/>
    <div class="container">
      <UserProfileMenu @component="currentTabComponent = $event" ref="menu"/>
      <component v-bind:is="currentTabComponent" @save="rerenderMenu"></component>
    </div>
    <WebsiteFooter/>
  </div>
</template>

<script>
import NavigationBar from "../../components/navigationBar/NavigationBar.vue"
import UserProfileMenu from "../userProfilePage/UserProfileMenu.vue"
import MyProfile from "./MyProfile.vue"
import ChangePassword from "./ChangePassword.vue"
import MyPurchases from "./MyPurchases.vue"
import WebsiteFooter from "../footer/WebsiteFooter.vue"

export default {
  components: {
    NavigationBar,
    UserProfileMenu,
    MyProfile,
    ChangePassword,
    MyPurchases,
    WebsiteFooter
  },
  beforeCreate() {
    if (this.$storage.getStorageSync("loginID") == undefined) {
      window.location.href = "products"
    }
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
  mounted() {
    this.currentTabComponent = this.$storage.getStorageSync("userProfile")
  },
  data() {
    return {
      currentTabComponent: "",
      save: 0,
      userActivityTimeout: null,
      userActivityThrottlerTimeout: null
    }
  },
  methods: {
    rerenderMenu() {
      this.$refs.menu.forceRerender()
      this.$refs.navbar.forceRerender()
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