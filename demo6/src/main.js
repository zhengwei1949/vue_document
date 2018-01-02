// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import a from './ceshi';
// import * as aaa from './ceshi';
// // console.log(a);
// console.log(aaa);
// import a,{c,d} from './ceshi';
// console.log(a,c,d)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  // components: { App }
  render:h=>h(App)
}).$mount('#app')
