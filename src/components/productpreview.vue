<template>
   

<div class="box product-box" @click="gotoProduct(caption)">
  <article class="media">
    <div class="media-left">
      <figure class="image product-img">
        <img :src="imageSrc" :alt="caption">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{caption}}</strong> 
         
        </p>
      </div>
      
    </div>
  </article>
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
    cursor: pointer;

}

.product-box:hover{
    box-shadow: 0 4px 3px rgba(10, 10, 10, 0.41);

}

.product-img {
    width: 100px;
    height: 100px;

}

</style>