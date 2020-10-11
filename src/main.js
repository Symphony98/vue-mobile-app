import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index"

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;
import 'lib-flexible'
// swiper图片懒加载 start
import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
// swiper图片懒加载 end

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");