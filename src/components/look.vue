<template>
<div>

     <div class="card look-image-holder border background-visual cover" v-bind:class="{ 'clickable': image.landscape }" v-b-visible="visibleHandler" :ref="'look' + image.id">

    <!-- <video v-show="image.video" class="c-look-video" :poster="image.url" preload="none" autoplay="autoplay" playsinline="" loop="loop" muted="muted"><source :src="image.url"></video>-->

      <b-img-lazy  v-show="!image.video" class=""  v-bind:class="{ 'c-look-image': image.landscape, 'c-look-image-port': !image.landscape,  }" :src="image.url" alt=""></b-img-lazy>

       <div v-show="image.caption" class="card-img-overlay caption-body">
        <div class="caption-overlay">{{image.caption}}</div>
       </div>

        <div class="c-info-icon">
        <div class="c-icon h2" v-show="image.landscape"><b-icon-info-square></b-icon-info-square></div>
       </div>



      <div class="row full-height no-gutters overflow-hidden " >
        <div class="col-md-6" v-bind:class="{ 'order-12': !image.landscape }"  @click.self="clickScreen()">
          
        </div>

        <div class="col-md-6" v-bind:class="{ 'order-1': !image.landscape }"  @click.self="clickScreen()">
         <transition name="fade">
                <div class="stl100  c-pane" v-show="showshop" ref="infoBox">

                    <div class="c-info-icon" >
                      <b-button variant="link" v-b-popover.hover.lefttop="'Add all products to favorites basket'" @click="addAll=!addAll"> select all</b-button>
                      <b-button variant="link" @click="showshop=false" v-show="image.landscape"> 
                       <div class="h4"><b-icon-x-circle></b-icon-x-circle></div>
                        </b-button>
                    </div>
                    
                    
                      <div class="c-prod-preview-container mt-4">
                        
                        <productPreview class="c-pp" v-for="product in this.$store.state.stl" :imageSrc="product.url" :caption="product.caption" :selectAll="addAll" ></productPreview>
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
                showshop: false,
                addAll: false
  
            }
        },
        computed: {
            

        },
        methods: {
            visibleHandler(isVisible) {
              if (!isVisible && this.image.landscape==true) {
                //setTimeout(() => this.showshop = true, 2000);
                this.showshop = false
              }
              if (isVisible){
                console.log("emit " + this.image.id)
                this.$emit('look-scrolled', this.image.id);

              }
            },
            clickScreen(){
              console.log("clicked")
              if(this.image.landscape==true){
                this.showshop=!this.showshop
              }
            },

        },

        created () {
          if(this.image.landscape == false) {
            this.showshop = true
          }

        },
        mounted() {
  window.addEventListener("keypress", e => {
    console.log(e.keyCode);
  });
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
    font-size: 1.2rem;
}

.caption-body {
    padding: 0rem!important;
} 

.c-info-icon{
    position: absolute;
    top: 0;
    right: 0;
}
.c-icon {
  color: white;
    padding: 0.51rem;
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

.c-look-image-port {
    display: block;
    height: auto;
    left: auto;
    max-width: none;
     min-height: 100%;
    min-width: 50%;
    right: 0;
    position: absolute;
    top: 0;
    width: auto;
    //z-index: 1;
    max-width: 50vw;
        min-width: 50vw;
        width: 50vw;
}

.c-pp{

    margin: 15px auto;
    max-width: 180px!important;

}

.c-pane {
  cursor: auto;

}

.c-prod-preview-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
}



</style>