<template>
  <div id="app">

    <lookbook/>

  </div>
</template>

<script>
import lookbook from './views/lookbook.vue'

export default {
  name: 'app',
  components: {
    lookbook
  },
  props: {
            locale: {
              type: String,
              default: 'en'
            },
            baseURL: {
              type: String,
              default: 'https:\/\/my-json-server.typicode.com/scienced/colect-starter'
            },
            sessionid: {
              type: String
            },
            collectionid: {
              type: String,
            },
        },
};
</script>

<style lang="scss">
@import 'assets/custom-vars.scss';

// Bootstrap and its default variables
@import '../node_modules/bootstrap/scss/bootstrap';
// BootstrapVue and its default variables
@import '../node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
