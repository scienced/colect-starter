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
