<template>
   <section class="section grayback">
     	 
   <b-container fluid>
    
    <lookNav/></lookNav>

    
      <b-spinner class="spinner-position" variant="primary" label="Loadig lookbook data" type="grow" v-show="loading"></b-spinner>
  

    <looks/></looks>
  </b-container>


   </section>
</template>

<script>
// @ is an alias to /src
import lookNav from '@/components/looknav.vue'
import looks from '@/components/looks.vue'

export default {
  name: 'home',
  components: {
    'lookNav': lookNav,
     'looks': looks
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


</style>