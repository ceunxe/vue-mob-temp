
import Vuex from '@util/store';

// 动态缓存页面方法
export function cacheHist(val) {
  if (!Array.isArray(val)) val = [];
  return {
    beforeRouteEnter(to, from, next) {
      // 动态添加缓存页面
      const com_name = to.matched[0].components.default.name || "";
      if (com_name && com_name.indexOf("Keep") > -1) {
        let vue_cache = JSON.parse(JSON.stringify(Vuex.state.cache));
        vue_cache.includes(com_name) ? "" : Vuex.state.cache.push(com_name);
      }
      next()
    },
    beforeRouteLeave(to, from, next) {
      // 离开的时候不是指定页面
      let vue_cache = JSON.parse(JSON.stringify(Vuex.state.cache));
      const to_path = to.path
      const com_name = from.matched[0].components.default.name || "";
      const find_index = val.findIndex(item => {
        return to_path.includes(item);
      })
      if (find_index === -1) {
        // 不是指定页面过滤名字
        Vuex.state.cache = vue_cache.filter(item => {
          return item !== com_name;
        });
      }
      next();
    },
  }
}

// 滚动位置保留
export const scrollY = {
  data() {
    return {
      dataPage:{
        posY:0
      }
    }
  },
  // 页面高度
  activated() {
    if (this.$el.getElementsByClassName("scroll-wrap")[0]) {
      this.$el.getElementsByClassName("scroll-wrap")[0].scrollTop = this.dataPage.posY;
    }
  },
  deactivated() {
    if (this.$el.getElementsByClassName('scroll-wrap')[0]) {
      this.dataPage.posY = this.$el.getElementsByClassName('scroll-wrap')[0].scrollTop
    }
  },
}