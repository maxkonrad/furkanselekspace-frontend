import { createApp } from "vue";
import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app")

axios.defaults.withCredentials = true
axios.defaults.baseURL = '';

Vue.config.productionTip = false


