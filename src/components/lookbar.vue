<template>
    <div>
      <div class="level">
        <div class="level-left">
              

        <li aria-hidden="true" class="back" type="arrow-left-icon">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M2,12a1,1,0,0,1,.29-0.71L10.59,3l1.29,1.29L5.17,11H21v2H5.17l6.71,6.71L10.59,21,2.29,12.71A1,1,0,0,1,2,12Z" class="large-icon" style="fill: currentColor"></path></svg>
        </li>
     


            <ul class="campaign-header">
          <li class="campaign-header__campaign-group">
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
             <p class="level-item has-text-centered"> <b-button type="is-primary " outlined>
            <b-icon pack="fas" icon="expand"></b-icon></b-button></p>
            <p class="level-item has-text-centered"> 
                <b-dropdown hoverable aria-role="list" position="is-bottom-left">
                    <button class="button is-primary has-text-centered" slot="trigger">
                        <span>Look 1-4</span>
                        <b-icon icon="caret-down"></b-icon>
                    </button>
                    <b-dropdown-item aria-role="listitem" v-for="image in lookBookData" v-scroll-to="'#look'+image.id">Look {{image.id}}</b-dropdown-item>
                </b-dropdown>
            </p>


          </div>
       </div>


     <div class="card lookImageHolder" v-for="image in lookBookData" :id="'look' + image.id">
          <div class="card-image">
            <figure class="image">
              <img class=""  :src="image.url" :alt="image.caption">
            </figure>
          </div>
          <div class="card-content is-overlay">
             <div class="captionOverlay">{{image.caption}}</div>
          </div>
        </div>
     
     

    </div>
</template>

<script>

    
    export default {
        components: {
         
        },
        data() {
            return {
                lookBookData: [
                    { 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170244495019745280/1170244495044907008/Dome_Deco.jpg', 'type': 'landscape', 'caption': 'Brown colors merged with beige tones and dressed in terracotta results in an earthy, warm sophisticated style.', 'date': '2016-10-15 13:43:27' },
                    { 'id': 2, 'url': 'https://images.cmft.io/1115457393585688576/1170548128441573376/1170548128470933504/Dome_Deco2.jpg', 'type': 'landscape', 'caption': 'Brown colors merged with beige tones and dressed in terracotta results in an earthy, warm sophisticated style.', 'date': '2016-10-15 13:43:27' },
                    { 'id': 3, 'url': 'https://images.cmft.io/1115457393585688576/1170548128609345536/1170548128642895872/Dome_Deco3.jpg', 'type': 'portrait', 'caption': 'Brown colors merged with beige tones and dressed in terracotta results in an earthy, warm sophisticated style.', 'date': '2016-10-15 13:43:27' },
                    { 'id': 4, 'url': 'https://images.cmft.io/1115457393585688576/1170548124134019072/1170548124146606080/Dome_Deco4.jpg', 'type': 'portrait', 'caption': 'Brown colors merged with beige tones and dressed in terracotta results in an earthy, warm sophisticated style.', 'date': '2016-10-15 13:43:27' },
                    
                ],
                
            }
        },
        methodes: {      
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
}



</style>