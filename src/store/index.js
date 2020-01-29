import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://my-json-server.typicode.com/scienced/colect-starter/";

export default new Vuex.Store({
  state: {
  	 looks: [],
  	 stl: []
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
    Vue.axios.get('looks').then(result => {
      commit('SAVE_LOOKS', result.data);
    }).catch(error => {
      throw new Error(`API ${error}`);
    });
  },
  loadStl({commit}) {
    Vue.axios.get('shopthelook').then(result => {
      commit('SAVE_STL', result.data);
    }).catch(error => {
      throw new Error(`API ${error}`);
    });
  },

  },
  modules: {
  }
})
