<template>
   <section class="section grayback">
     	 
   <div class="container is-fluid">   
    <lookBar/>

   </div>

   </section>
</template>

<script>
// @ is an alias to /src
import lookBar from '@/components/lookbar.vue'

export default {
  name: 'home',
  components: {
    lookBar
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
.lookImages {
  margin-top: 1rem;
}

</style>