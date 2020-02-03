<template>
<div>

     <div class="card look-image-holder clickable border background-visual cover"  v-b-visible="visibleHandler">

       
     <video v-show="image.video" class="c-look-video" poster="image.url" preload="none" autoplay="autoplay" playsinline="" loop="loop" muted="muted"><source src="image.url"></video>

      <img  v-show="!image.video" class="c-look-image" v-lazy="image.url" alt="" />
     

       <div class="card-img-overlay caption-body">
        <div class="caption-overlay">{{image.caption}} {{image.video}}</div>
       </div>

      <div class="row full-height no-gutters overflow-hidden clickable" >
        <div class="col-md-6 " @click.self="showshop=!showshop">
          
        </div>

        <div class="col-md-6" @click.self="showshop=!showshop">
         <transition name="fade">
                <div class="stl100 rounded-right" v-show="showshop">

                    <div class="text-right"><b-button variant="link" @click="showshop=false"> <b-icon-x-circle></b-icon-x-circle>{{ $t("close") }}</b-button></p></div>
                    
                    <div class="row">
                      <div class="col-md-6"  v-for="product in this.$store.state.stl">
                        <productPreview :imageSrc="product.url" :caption="product.caption"></productPreview>

                      </div>
                    </div>
                 
                 </div>
         </transition>
       </div>
  </div>



</div>
</div>
</template>

<script>
  import productpreview from '@/components/productpreview.vue'
    
    export default {
        components: {
         'productPreview': productpreview,

        },
        props: {
            image: {
              required: true
            },
        },
        data() {
            return {
                showshop: false
  
            }
        },
        computed: {
            

        },
        methods: {
            visibleHandler(isVisible) {
              if (isVisible) {
                //setTimeout(() => this.showshop = true, 2000);
                


              } else {
                this.showshop = false

              }
            }

        },

        created () {

        }
    };
</script>

<style>
.look-image-holder {
  margin-bottom: 1.2rem;
}

.clickable {
     cursor: pointer;
}

.caption-overlay {
    color: white;
    max-width: 40%;
    background-color: #17161680;
    padding: 1rem;
    text-align: left;
    font-family: 'Source Serif Pro', serif;
}

.caption-body {
    padding: 0rem!important;
} 

.stl50 {
    height: 100%;
    background-color: white;
    width: 50%;
    padding: 1.3rem;
    text-align: left;
    overflow: hidden;
}
.stl100 {
    height: 100%;
    background-color: white;
    width: 100%;
    padding: 1.3rem;
    text-align: left;
    overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: all .7s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.full-height {
  height: 100vh;
}

.background-visual {
    background: no-repeat 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.cover {
    overflow: hidden;
    z-index: 1;
    position: relative;
}

.c-look-image, .c-look-video{
    display: block;
    height: auto;
    left: auto;
    max-width: none;
     min-height: 100%;
    min-width: 100%;
    right: auto;
    position: absolute;
    top: 0;
    width: auto;
    //z-index: 1;
}

@supports (transform: translateX(-50%)) {

    .c-look-image, .c-look-video{
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

}

@media screen and (min-aspect-ratio: 16/9){/* Make this the same aspect ratio as your video */

    .c-look-image, .c-look-video{
        max-width: 100vw;
        min-width: 100vw;
        width: 100vw;
    }

}
@media screen and (max-aspect-ratio: 16/9){/* Make this the same aspect ratio as your video */

    .c-look-image, .c-look-video {
        height: 100vh;
        max-height: 100vh;
        min-height: 100vh;
    }

}

</style>