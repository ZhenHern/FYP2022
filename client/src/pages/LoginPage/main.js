import * as Vue from 'vue';
import "../../assets/style.css";
import LoginPage from './LoginPage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(LoginPage).use(Vue3Storage).mount('#app');

