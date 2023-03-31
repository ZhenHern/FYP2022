import * as Vue from 'vue';
import "../../assets/style.css";
import LandingPage from './LandingPage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(LandingPage).use(Vue3Storage).mount('#app');
  


