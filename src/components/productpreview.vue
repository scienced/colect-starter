<template>
   

<div class=" product-box" >

  <div class="cart-icon">
          <a class="" aria-label="reply" @click="gotoProduct(caption)">
            <b-icon class="icon-c" icon="cart-plus" size="is-small"></b-icon>
          </a>    
  </div>
  
    <div class="">
      <figure class="image product-img">
        <img :src="imageSrc" :alt="caption">
      </figure>
    </div>
   
      <div class="has-text-centered product-link" @click="gotoProduct(caption)">
        <p>
          <strong>{{caption}}</strong> 
         
        </p>
      </div>
      <!--<nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <b-icon class="media-left" icon="cart-plus" size="is-small" type="is-primary"></b-icon>
          </a>
          
        </div>
      </nav>-->
      
  
 
</div>
    
</template>

<script>
    export default {
        data() {
            return {
                
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
            gotoProduct(url) {
                this.$buefy.toast.open({
                    duration: 1500,
                    message: `Deeplink to product page: ${url}`,
                    position: 'is-bottom',
                    type: 'is-success'
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
    width: 128px;
    height: 128px;
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