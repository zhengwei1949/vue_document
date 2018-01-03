// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import MyPlugin from './myplugin';
Vue.use(MyPlugin);
Vue.myGlobalMethod()
// Vue.use(MintUI)





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  created(){
    this.$myMethod();
  }, 
  router,
  template: '<App/>',
  // components: { App }
  render:h=>h(App)
}).$mount('#app')
