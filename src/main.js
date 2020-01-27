import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'


import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faEdit, faPlusCircle, faEllipsisV, faTrashAlt, faExpand, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faEdit, faPlusCircle, faEllipsisV, faTrashAlt, faExpand, faCartPlus);
Vue.component('vue-fontawesome', FontAwesomeIcon);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


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
