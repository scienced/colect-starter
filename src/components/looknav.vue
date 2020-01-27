<template>

	  <b-row align-h="between" class="py-2">
	    <b-col cols="3" class="text-left">
	        <router-link to="/"> <li aria-hidden="true" class="back" type="arrow-left-icon">
            <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M2,12a1,1,0,0,1,.29-0.71L10.59,3l1.29,1.29L5.17,11H21v2H5.17l6.71,6.71L10.59,21,2.29,12.71A1,1,0,0,1,2,12Z" class="large-icon" style="fill: currentColor"></path></svg>
	        </li>
	        </router-link>

	        <!--<ul class="campaign-header">
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
	        </ul>-->

	    </b-col>


	    <b-col cols="3" class="text-right">
	    	
            <b-button variant="primary mr-1" outlined @click="this.toggle">
            <b-icon-arrows-fullscreen></b-icon-arrows-fullscreen>
            </b-button>

            
            <b-dropdown :text="'Looks 1-' + lookBookData.length" variant="primary">
                    <b-dropdown-item aria-role="listitem" v-for="image in lookBookData" v-scroll-to="'#look'+image.id">Look {{image.id}}</b-dropdown-item>
            </b-dropdown>
            
	    </b-col>
	  </b-row>
 </template>
<script>
    export default {

        data() {
            return {
                //nothing yet
            }
        },

        props: {
            lookBookData: {
              default: function () {

              	return [{ 'id': 1, 'url': 'https://images.cmft.io/1115457393585688576/1170244495019745280/1170244495044907008/Dome_Deco.jpg', 'landscape': true, 'caption': 'Brown colors merged with beige tones and dressed in terracotta results in an earthy, warm sophisticated style.', 'date': '2016-10-15 13:43:27', 'showshop': false },
                    { 'id': 2, 'url': 'https://images.cmft.io/1115457393585688576/1170548128441573376/1170548128470933504/Dome_Deco2.jpg', 'landscape': true, 'caption': '', 'date': '2016-10-15 13:43:27', 'showshop': false, 'showsize': 'small'  },
                    { 'id': 3, 'url': 'https://images.cmft.io/1115457393585688576/1170548128609345536/1170548128642895872/Dome_Deco3.jpg', 'landscape': false, 'caption': '', 'date': '2016-10-15 13:43:27', 'showshop': false  },
                    { 'id': 4, 'url': 'https://images.cmft.io/1115457393585688576/1170548124134019072/1170548124146606080/Dome_Deco4.jpg', 'landscape': false, 'caption': '', 'date': '2016-10-15 13:43:27' , 'showshop': false }]
                   }
            },
        },

        computed: {
            
        },
        methods: {
        
        }
    };
</script>
<style>
.back {
    color: rgba(0,0,0,.6);
    padding-left: 5px;
    list-style-type: none;
     cursor: pointer;
}

.campaign-header{
    border-left: 1px solid rgba(0,0,0,.15);
    padding-left: 24px;
    justify-content: center;
    text-align: left;
}

</style>