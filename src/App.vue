<template>
  <div id="app">

    <!--<b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://images.cmft.io/1096420819296460800/1168891702610628608/1168891702627409920/image.png"
                    alt="Lite"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
           
        </template>

        <template slot="end">

          <b-navbar-item>
          <b-taglist attached>
        <b-tag type="is-dark">VERSION</b-tag>
        <b-tag type="is-primary">0.2</b-tag>
    </b-taglist>
  </b-navbar-item>

             <b-navbar-dropdown label="COLECT.IO">

                <b-navbar-item tag="router-link" :to="{ path: '/lookbook' }">
                Lookbook
            </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/users' }">
                Users
            </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>-->

    <router-view/>

    
  </div>
</template>


<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap');


// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #45c8f1;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
