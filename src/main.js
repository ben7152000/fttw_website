import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import './styles/index.css'
import './styles/common.css'
import Vue3Toasity from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

createApp(App)
  .use(
    Vue3Toasity,
    { autoClose: 3000, closeButton: false }
  )
  .use(routers)
  .mount('#app')
