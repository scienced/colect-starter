<template>
   <section class="section grayback">
     	 
   <div class="container is-fluid">   
    <lookBar/>

    <div class="lookImages">
      <img src="https://images.cmft.io/1115457393585688576/1170244495019745280/1170244495044907008/Dome_Deco.jpg">
     </div> 
     <div class="lookImages">
      <img src="https://images.cmft.io/1115457393585688576/1170244495019745280/1170244495044907008/Dome_Deco.jpg">
     </div>
     <div class="lookImages">
      <img src="https://images.cmft.io/1115457393585688576/1170244495019745280/1170244495044907008/Dome_Deco.jpg">
     </div>
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