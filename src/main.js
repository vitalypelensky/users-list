// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementLocale from 'element-ui/lib/locale/lang/ua'
import store from './store/store'
Vue.config.productionTip = false


Vue.use(ElementUI,{ locale: ElementLocale })



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
