import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/animate.min.css"
import "./assets/css/common.css"
//导入无后端评论系统valine
import Valine from 'valine';

//导入并执行给Vue混入的代码
import "@/mixins"

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

//添加一个Valine具体的实例
new Valine({
  el:'#vcomments',
  appId: 'yf3RsSERaJP4rRe9GR2LyER6-gzGzoHsz',
  appKey: 'FpkCl06PkYzifRUm5GhJCUvR'
  // other config
})
