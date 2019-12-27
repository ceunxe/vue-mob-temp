import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// ===>拓展
import navT from "@com/navT/NavT";
import navB from "@com/navB/NavB";
Vue.component("navT", navT);
Vue.component("navB", navB);

const routes = [
  { path: '*',  redirect:'/home'},
  {
    path: '/home',
    name: 'home',
    component: () => import('@page/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

// 解决相同路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => err);
};

VueRouter.prototype.toGo = function (path) {
  this.direction = "forward";
  this.push(path);
};
VueRouter.prototype.goBack = function () {
  this.direction = "reverse";
  this.go(-1);
};

export default router
