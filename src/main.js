import Vue from 'vue'
import App from './App.vue'
//import router from './router'
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

//load config
const configElement = document.getElementById( 'config' );
const configi = JSON.parse( configElement.innerHTML );


//load VueI18n, later in aparte plugin en languange files zetten voor overzichtelijkheid
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: configi.locale,
  fallbackLocale: 'en',

  messages: { en: {     
    close: 'close',
    look: 'look | looks',
    fulldev: 'Fullscreen mode is still in development'    
  },   
  fr: {         
   close: 'proche',
   look: 'regard | regards',
   fulldev: 'Le mode plein écran est toujours en développement'   
  }  }
})


new Vue({
//  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
