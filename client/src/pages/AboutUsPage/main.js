import * as Vue from 'vue';
import "../../assets/style.css";
import AboutUsPage from './AboutUsPage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(AboutUsPage).use(Vue3Storage).mount('#app');
  


