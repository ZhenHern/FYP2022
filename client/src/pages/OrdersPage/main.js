import * as Vue from 'vue';
import "../../assets/style.css";
import OrdersPage from './OrdersPage.vue';
import Vue3Storage from "vue3-storage";

Vue.createApp(OrdersPage).use(Vue3Storage).mount('#app');
 
