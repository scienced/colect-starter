<template>
 
 <div class="scroll-snap-container">
    <lookNav class="item"></lookNav>
  <look v-for="image in this.$store.state.looks" :image="image" class="item"></look>
 </div>
 
</template>

<script>

  import look from '@/components/look.vue'
  import lookNav from '@/components/looknav.vue'

    
    export default {
        components: {
         'look': look,
         'lookNav': lookNav,
        },
        data() {
            return {
  
            }
        },
        computed: {
            

        },
        methods: {
          
        },

        created () {

        }
    };
</script>

<style>
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

</style>