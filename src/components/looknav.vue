<template>

	 <div class="d-flex justify-content-end py-2">
	    	
            <b-button  variant="link" outlined v-b-popover.hover.bottom="$t('fulldev')">
            <b-icon-arrows-fullscreen></b-icon-arrows-fullscreen> Fullscreen
            </b-button>

            
            <b-dropdown :text="$tc('look',2) + ' 1-' + this.$store.state.looks.length" variant="primary" right class="rounded-0">
                    <b-dropdown-item aria-role="listitem" v-for="image in this.$store.state.looks" v-scroll-to="'#look'+image.id">{{ $tc("look",1) }} {{image.id}}</b-dropdown-item>
            </b-dropdown>
            
      </div>      



 </template>
<script>
    export default {

        data() {
            return {
                //nothing yet
            }
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