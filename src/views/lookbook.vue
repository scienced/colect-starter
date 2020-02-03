<template>
 
     	 
   <b-container fluid class="section grayback scroll-snap-container">
    

      <lookNav class="item-no-snap"></lookNav>

      <b-spinner class="spinner-position" variant="primary" label="Loadig lookbook data" type="grow" v-show="loading"></b-spinner>
  
 

     <look v-for="(image, index) in this.$store.state.looks" :image="image" class="item" :id="'look' + image.id" :class="{ 'item-first': index === 0 }"></look>

   


  </b-container>


 
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import lookNav from '@/components/looknav.vue'
import looks from '@/components/looks.vue'
 import look from '@/components/look.vue'

 import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://dummyimage.com/1275x705/948489/fcfcfc&text=Loading+Lookbook',
  attempt: 1
})

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)




export default {
  name: 'home',
  components: {
    'lookNav': lookNav,
     'looks': looks,
     'look': look,
     

  },

  data() {
      return {
                isActive: true,
                loading: true,
            }
        },
  created() {
  this.loadApi()
  this.$store.dispatch('loadStl');
  },
  methods: {
    async loadApi() {
      this.loading = true
      await this.$store.dispatch('loadLooks')
      this.loading = false
    }
  }
};
</script>

<style>
.grayback {
  background-color: #f9f8f8;
}

.spinner-position {
    position: absolute;
    top: 50vh;
    left: 50vw;
    z-index: 200000;
}

 .scroll-snap-container {
    position: relative;
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
    overflow: auto;
    scroll-snap-type: y mandatory;
    }

 .item {
    scroll-snap-align: start;
    
    }
.item-first {
    scroll-snap-align: start;
    scroll-margin-top: 60px;
    }

.item-no-snap {
  scroll-snap-align: none;
}



</style>