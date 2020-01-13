<template>



   <section class="section">
    <div class="container">    	 
        	
      <CollectionTabel/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import CollectionTabel from '@/components/collections.vue'

export default {
  name: 'home',
  components: {
    CollectionTabel
  },

  data() {
            return {
                isActive: true
            }
        }
}
</script>
