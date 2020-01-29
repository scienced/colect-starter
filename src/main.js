import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	lazyComponent: true,
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://dummyimage.com/1275x705/948489/fcfcfc&text=Loading+Lookbook',
  attempt: 1
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
