import * as Vue from 'vue';
import "../../assets/style.css";
import UserProfilePage from './UserProfilePage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(UserProfilePage).use(Vue3Storage).mount('#app');
  


