import * as Vue from 'vue';
import "../../assets/style.css";
import DashboardPage from './DashboardPage.vue';
import Vue3Storage from "vue3-storage";
import Vue3Autocounter from 'vue3-autocounter';

Vue.createApp(DashboardPage).component('vue3-autocounter' ,Vue3Autocounter).use(Vue3Storage).mount('#app');

