<template>

  <div class="card mb-2 border-0 text-center"  @click="makeToast()">
   
        <img class="product-img" :src="imageSrc" :alt="caption">
    
  <div class="card-body">
    <span class="card-title ">{{caption}}</span>
  </div>
</div>


    
</template>

<script>
    export default {
        data() {
            return {
              toastCount: 0
                
            }
        },

        props: {
            imageSrc: {
              type: String,
              required: true
            },
            caption: {
              type: String,
              required: true
            },
        },
        computed: {
            
        },
        methods: {
            makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
          title: this.caption,
          variant: "primary",
          autoHideDelay: 5000,
          appendToast: append
        })
      }
        
        }
    };
</script>
<style>
.product-box{
    margin: 0.7rem;
    padding: 0.4rem;
    padding-top: 1.2rem;
    position: relative;
}

.product-link{
    cursor: pointer;
}

.product-img {
   max-width: 150px !important;
    max-height: 200px !important;
    margin-left: auto;
    margin-right: auto;
}

.product-title {

}

</style>