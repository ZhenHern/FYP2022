import * as Vue from 'vue';
import "../../assets/style.css";
import ProductPage from './ProductPage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(ProductPage).use(Vue3Storage).mount('#app');


