<template>

<div>
  <b-navbar toggleable="lg" type="light" variant="white">
    <b-navbar-brand href="#"<img src="http://legacy.domedeco.com/sites/all/themes/domedeco/logo.png" style="max-height: 37px;"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text class="ml-lg-4">Lookbook Authentic Winter 2020</b-nav-text>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

        <b-nav-item ><b-icon-search></b-icon-search></b-nav-item>
        <b-nav-item ><b-icon-document-text></b-icon-document-text></b-nav-item>
        <b-nav-item ><b-icon-grid></b-icon-grid></b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Michiel Tol</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

</style>