import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@util/store"
import "@ass/styles/global.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// ===> 拓展
import '@util/scale'

// loading加载动画
import load from "@com/loading/index.js"
Vue.use(load)

// 手机端控制台
// import Vconsole from "vconsole";
// let vConsole = new Vconsole();
// Vue.use(vConsole);
