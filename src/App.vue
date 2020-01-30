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
// Define your variable overrides here
$primary: #45C8EF;


@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
