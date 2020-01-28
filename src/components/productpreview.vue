<template>

  <div class="card mb-2 border-0"  @click="makeToast()">
   
        <img class="product-img" :src="imageSrc" :alt="caption">
    
  <div class="card-body">
    <h5 class="card-title">{{caption}}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
    width: 130px;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
}

.cart-icon {
    position: absolute;
    right: 10px;
    top: 10px;
}
.icon-c {
      color: #e8e8e8 !important;
}

</style>