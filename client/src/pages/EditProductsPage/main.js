import * as Vue from 'vue';
import "../../assets/style.css";
import EditProductsPage from './EditProductsPage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(EditProductsPage).use(Vue3Storage).mount('#app');
 
