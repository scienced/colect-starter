<template>
   <section class="section grayback">
     	 
   <b-container fluid>
    <lookNav/></lookNav>
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
                isActive: true
            }
        }
};
</script>

<style>
.grayback {
  background-color: #f9f8f8;
}


</style>