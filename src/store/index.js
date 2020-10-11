import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 存储用户点击的商品信息，在跳转后显示信息
    product: {}
  },
  mutations: {
    SETPRO(state, paylod) {      
      state.product = paylod
    }
  },
  actions: {}
});
