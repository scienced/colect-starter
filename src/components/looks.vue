<template>
 <div>

  <look v-for="image in this.$store.state.looks" :image="image"></look>

 </div>
</template>

<script>

  import look from '@/components/look.vue'

    
    export default {
        components: {
         'look': look
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

</style>