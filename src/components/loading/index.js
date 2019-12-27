
import loadTemp from "./Loading.vue";

const loading = {
  install: function (Vue) {
    const Temp = Vue.extend(loadTemp);
    const Mount = new Temp().$mount().$el;
    document.body.appendChild(Mount);
    const mtd = {
      show() { // 显示方法
        Temp.show = true
      },
      hide() { // 隐藏方法
        Temp.hide = false
      }
    }
    Vue.prototype.$nLoading = mtd
  },

}
export default loading;
