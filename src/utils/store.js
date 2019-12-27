import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cache: [],
  },
  mutations: {
    clearCache(state) {
      state.cache = []
    }
  }
})

export default store;