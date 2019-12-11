import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
