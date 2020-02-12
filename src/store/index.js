import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios);

const configElement = document.getElementById( 'config' );
const config = JSON.parse( configElement.innerHTML );
Vue.axios.defaults.baseURL = config.baseURL;

export default new Vuex.Store({
  state: {
  	 looks: [],
  	 stl: [],
     sessionid: config.sessionid,
     collectionid: config.collectionid
  },
  mutations: {
  	SAVE_LOOKS(state, looks) {
  		state.looks = looks
  	},
  	SAVE_STL(state, stl) {
  		state.stl = stl
  	}
  },
  actions: {
  	loadLooks({commit}) {
  	return new Promise((resolve, reject) => {
    Vue.axios.get('looks').then(result => {
      commit('SAVE_LOOKS', result.data);
      resolve(result);
    }, error => {
      reject(error);
    });
   })
  },
  loadStl({commit}) {
    Vue.axios.get('shopthelook1').then(result => {
      commit('SAVE_STL', result.data);
    }).catch(error => {
      throw new Error(`API ${error}`);
    });
  },

  },
  modules: {
  }
})
