<template>
 
   <div>

    <!--<b-progress height="4px" :value="scroll" :max="5" class="c-progress"></b-progress>-->
<navbar></navbar>

   <b-container fluid class="section bg-light ">

    

      <lookNav class=""></lookNav>

      <b-spinner class="spinner-position" variant="primary" label="Loadig lookbook data" type="grow" v-show="loading"></b-spinner>
  
 

     <look v-for="(image, index) in this.$store.state.looks" :image="image" class="" :id="'look' + image.id" :class="{ 'item-first': index === 0 }" @look-scrolled="scrolled"></look>

   


  </b-container>

      <!--<div class="container-w">
      <div class="item-w">A</div>
    <div class="item-w">b</div>
    <div class="item-w">c</div>
    <div class="item-w">d</div>
    <div class="item-w">e</div>
    <div class="item-w">f</div>
    <div class="item-w">g</div>
    <div class="item-w">h</div>
    <div class="item-w">i</div>
    <div class="item-w">j</div>
    <div class="item-w">k</div>
    <div class="item-w">l</div>
    <div class="item-w">m</div>
    </div>-->

</div>


 
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import lookNav from '@/components/looknav.vue'
import looks from '@/components/looks.vue'
 import look from '@/components/look.vue'
 import navbar from '@/components/navbar.vue'

 import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://dummyimage.com/1275x705/948489/fcfcfc&text=Loading+Lookbook',
  attempt: 1
})

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: false,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })




export default {
  name: 'home',
  components: {
    'lookNav': lookNav,
     'looks': looks,
     'look': look,
     'navbar': navbar
     

  },

  data() {
      return {
                isActive: true,
                loading: true,
                scroll: 0
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
    },

    scrolled (value) {
      this.scroll = value -1

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

.c-progress{
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 5px;

}

* {
  box-sizing: border-box;
}

.container-w {
    display: flex;
  flex-direction: row;

 
  flex-wrap: wrap;
   min-height: -webkit-min-content;
  width: 300px;
  overflow: hidden;
  border: solid 1px red;
  margin: 0;
  padding: 0;
  list-style: none;
}

.item-w {
  height: auto;
  padding: 15px;
  width: 140px;
  border: solid 1px #000;
  flex: 1 1 45%;
  background-color: green
}


</style>