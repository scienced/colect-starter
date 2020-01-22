<template>
    <div>
      <div class="level">
        <div class="level-left">
              

      
        <router-link to="/"> <li aria-hidden="true" class="back" type="arrow-left-icon" @click="counter += 1">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M2,12a1,1,0,0,1,.29-0.71L10.59,3l1.29,1.29L5.17,11H21v2H5.17l6.71,6.71L10.59,21,2.29,12.71A1,1,0,0,1,2,12Z" class="large-icon" style="fill: currentColor"></path></svg>
        </li></router-link>
     


            <ul class="campaign-header">
          <li class="campaign-header__campaign-group" style="display: block;">
              <p class="is-size-6">
                Lookbook
              </p>
                      </li>
        <li class="campaign-header2">
          <div class="">
              <p class="is-size-5" title="Pitti-Uomo-IT">Authentic Winter 19/20</p>
          </div>
        </li>
      </ul>
           
        </div>

         <!--<div class="level-item has-text-centered">
             <b-dropdown position="is-bottom-center" aria-role="menu" trap-focus>
                    <a
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span>Look 4 of 5 </span>
                        <b-icon icon="caret-down" size="is-small"></b-icon>
                    </a>
                    <b-dropdown-item aria-role="listitem" v-for="image in lookBookData">Look {{image.id}}</b-dropdown-item>
                  
              </b-dropdown>
          </div>-->

          <div class="level-right">
             <p class="level-item has-text-centered"> <b-button type="is-primary " outlined @click="this.toggle">
            <b-icon pack="fas" icon="expand"></b-icon></b-button></p>
            <p class="level-item has-text-centered"> 
                <b-dropdown hoverable aria-role="list" position="is-bottom-left">
                    <button class="button is-primary has-text-centered" slot="trigger">
                        <span>Look 1-{{lookBookData.length}}</span>
                        <b-icon icon="caret-down"></b-icon>
                    </button>
                    <b-dropdown-item aria-role="listitem" v-for="image in lookBookData" v-scroll-to="'#look'+image.id">Look {{image.id}}</b-dropdown-item>
                </b-dropdown>
            </p>


          </div>
       </div>

    <div class="fullscreenContent" @keydown.esc="counter += 1">

<div class="columns is-multiline">   
     <div class="card lookImageHolder column" v-for="image in lookBookData" :key="image.id" v-bind:class="imageOr(image.landscape)" :id="'look' + image.id" >

    

          <transition name="list">
          <div class="card-image tol" v-bind:class="{ 'look-image-crimp': image.showshop }">
            <!--<div class="hero__visual" v-bind:style="{ backgroundImage: 'url(' + image.url + ')' }">-->

              <!--<lazy-component @show="handler">
              <img class="hero__visual" :src="image.url" width="100%">
            </lazy-component>-->

              <div class="hero__visual clickable"  v-lazy:background-image="image.url" @click="image.showshop=!image.showshop"></div>

            
          </div>
        </transition>
          
        

          <div class=" is-overlay clickable" v-if="image.caption != ''" @click="image.showshop=!image.showshop">
             <div class="captionOverlay">{{image.caption}}</div>
          </div>

           <div class=" is-overlay" v-if="fullscreen">
             <div class="buttonOverlay"> <b-button type="is-primary" outlined>Previous</b-button><b-button type="is-primary" outlined>Next</b-button></div>
          </div>




          <transition name="fade">
          <div class="is-overlay level-right" v-show="image.showshop">
             <div class="" v-bind:class="stlOrientataion(image.landscape)">

                <nav class="level">
                     <!-- Left side -->
                      <div class="level-left">
                        <div class="level-item">
                          <!--<p class="subtitle is-5">
                            <strong>{{shopTheLookData.length}}</strong> products
                          </p>-->
                        </div>
                       </div>
                       <!-- Right side -->
                          <div class="level-right">
                            <p class="level-item"> <b-button type="is-text" @click="image.showshop=false">CLOSE</b-button></p>
                          </div>



                </nav>

                <div class="columns is-multiline">
                  <div class="column is-4"  v-for="product in shopTheLookData">
                    <productPreview :imageSrc="product.url" :caption="product.caption"></productPreview>

                    <!--<img class=""  :src="product.url" :alt="product.caption">
                    <p class="is-vbottum"> {{product.caption}}</p>-->

                  </div>
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
  import fullscreen from 'vue-fullscreen'
  import Vue from 'vue'
  Vue.use(fullscreen)

  import productpreview from '@/components/productpreview.vue'

    
    export default {
        components: {
         'productPreview': productpreview
        },
        data() {
            return {
                showShop1: false,
                fullscreen: false,
                counter: 0,
                lookBookData: [
                    { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170244495019745280/1170244495044907008/Dome_Deco.jpg', 'landscape': true, 'caption': 'Brown colors merged with beige tones and dressed in terracotta results in an earthy, warm sophisticated style.', 'date': '2016-10-15 13:43:27', 'showshop': false },
                    { 'id': 2, 'url': 'https://images.cmft.io/1115457393585688576/1170548128441573376/1170548128470933504/Dome_Deco2.jpg', 'landscape': true, 'caption': '', 'date': '2016-10-15 13:43:27', 'showshop': false, 'showsize': 'small'  },
                    { 'id': 3, 'url': 'https://images.cmft.io/1115457393585688576/1170548128609345536/1170548128642895872/Dome_Deco3.jpg', 'landscape': false, 'caption': '', 'date': '2016-10-15 13:43:27', 'showshop': false  },
                    { 'id': 4, 'url': 'https://images.cmft.io/1115457393585688576/1170548124134019072/1170548124146606080/Dome_Deco4.jpg', 'landscape': false, 'caption': '', 'date': '2016-10-15 13:43:27' , 'showshop': false },
                    
                ],

                shopTheLookData: [
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170586899329458176/1170586899354624000/image.png', 'caption': 'Stool 864532', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170589188370866176/1170589188391833600/image.png', 'caption': 'Cups 86332', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170587019680817152/1170587019705982976/image.png', 'caption': 'Jams 864544', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170586772703416320/1170586772724387840/image.png', 'caption': 'Produc 8645326', 'date': '2016-10-15 13:43:27' },
                  { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170586899329458176/1170586899354624000/image.png', 'caption': 'Stool 864532', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170589188370866176/1170589188391833600/image.png', 'caption': 'Cups 86332', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170587019680817152/1170587019705982976/image.png', 'caption': 'Jams 864544', 'date': '2016-10-15 13:43:27' },
                 



                ],
                shopTheLookData2: [
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170586899329458176/1170586899354624000/image.png', 'caption': 'Stool 864532', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170589188370866176/1170589188391833600/image.png', 'caption': 'Cups 86332', 'date': '2016-10-15 13:43:27' },
                 { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170587019680817152/1170587019705982976/image.png', 'caption': 'Jams 864544', 'date': '2016-10-15 13:43:27' },
         
                ],


                
            }
        },
        computed: {
            

        },
        methods: {
          toggle () {
            console.log('toggle')
            this.$fullscreen.toggle(this.$el.querySelector('.fullscreenContent'), {
              wrap: false,
              callback: this.fullscreenChange
            })
          },

        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
          },

        imageOr(landscape) {
            if (landscape == true) {
                return 'is-12'
            } else {return 'is-6'}
        },
        stlOrientataion(landscape) {
            if (landscape == true) {
                return 'stl50'
            } else {return 'stl100'}
        },
        imageOrientataion(url) {
            let img = new Image();
            img.src = url;
            img.onload = () => {
                  var landport = '' 
                  if(img.width >= img.height) {landport = 'landscape'}
                  if(img.width < img.height) {landport = 'portait'}
                  console.log(landport)
            }
        
        },


        clickedonCard(imageId) {

            

        }

        

        },

        created () {

        }
    };
</script>

<style>
.grayback {
  background-color: #f9f8f8;
}
.lookImageHolder {
  margin-bottom: 1.2rem;
 
}

.clickable {
     cursor: pointer;
}

.lookImage {
  position: absolute;
  z-index: 2;
}

.captionOverlay {
    color: white;
    max-width: 40%;
    background-color: #17161680;
    padding: 1rem;
    text-align: left;
    font-family: 'Source Serif Pro', serif;
}

.buttonOverlay {
  color: white;
    
    background-color: #17161680;
    padding: 1rem;
}

.campaign-header{
    border-left: 1px solid rgba(0,0,0,.15);
    padding-left: 24px;
    justify-content: center;
    text-align: left;
}

.back {
    color: rgba(0,0,0,.6);
    padding-left: 32px;
    padding-right: 24px;
    list-style-type: none;
     cursor: pointer;
}

.stl50 {
    height: 100%;
    background-color: white;
    width: 50%;
    padding: 1.3rem;
    text-align: left;
}
.stl100 {
    height: 100%;
    background-color: white;
    width: 100%;
    padding: 1.3rem;
    text-align: left;
}

.fade-enter-active, .fade-leave-active {
  transition: all .7s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
  
}

.list-move {
  transition: transform 1s;
}

.tol {
  height: 100vh;
}

.look-image-crimp {
  width: 70%!important;
}

.hero__visual {
      position: absolute;
    top: 0;
    left: 0;
        background: no-repeat 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.column {
    padding:0rem;
}

</style>