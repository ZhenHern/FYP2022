import * as Vue from 'vue';
import "../../assets/style.css";
import EditProductsPage from './EditProductsPage.vue';
import Vue3Storage from "vue3-storage";
import Vue3Autocounter from 'vue3-autocounter';

Vue.createApp(EditProductsPage).component('vue3-autocounter' ,Vue3Autocounter).use(Vue3Storage).mount('#app');

