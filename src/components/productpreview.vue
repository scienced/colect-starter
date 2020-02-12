<template>

  <div class="card my-2 border-0 text-center c-prod-preview" >

    <div class="c-favorite h5" @click="makeFavorite()" v-b-popover.hover.lefttop="'Add to favorites basket'"><b-icon :icon="iconType" class="primary" variant="primary"></b-icon></div>
   
        <img class="product-img" :src="imageSrc" :alt="caption">
    
  <div class="card-body c-card-body">
    <span class="card-title c-card-title">{{caption}}</span>
  </div>
</div>


    
</template>

<script>
    export default {
        data() {
            return {
              toastCount: 0,
              type:'heart'
                
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
            selectAll: {
              type: Boolean
            }
        },
        computed: {

          iconType() {
            if(this.type == 'heart-fill' || this.selectAll == true) {return 'heart-fill'}
              else {return 'heart'}
          }

            
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
      },

      makeFavorite() {
        if(this.type == 'heart') {
          this.type = 'heart-fill'
        }
        else {this.type = 'heart'}

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
   width: 150px !important;
    height: 150px !important;
    margin-left: auto;
    margin-right: auto;
}

.c-favorite{
  position: absolute;
  right: 0;
  top:0;
  cursor: pointer;

}

.c-prod-preview {
  max-width: 200px;
}

.c-card-title {
      font-weight: 600;
    font-size: 0.8em;
}
.c-card-body {
  text-align: left;
}


</style>