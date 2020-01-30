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
  }
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
  text-align: center;
  color: #2c3e50;
}


</style>
