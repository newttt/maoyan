import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import UILib from "@lib"
import VueTouch from "vue-touch"
import "@common/style/index.css";
import "@common/filter"
import "@lib/loading/index.js";
Vue.config.productionTip = false
Vue.use(UILib);
Vue.use(VueTouch, {
  name: 'v-touch'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
