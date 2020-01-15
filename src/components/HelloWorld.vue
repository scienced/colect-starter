<template>
    <section>
       
        <b-message title="Message Lookbook POC" :active.sync="isActive" aria-close-label="Close message" type="is-primary">
            This is a proof of concept for the Colect Lookbook feature built with a <strong>Javascript framework</strong> (VueJs) and a <strong>CSS framework </strong>(Beufy/Bulma).<br><br>

            <b-button type="is-primary" outlined tag="router-link"
                to="/lookbook"
                 >Lookbook Demo</b-button>
                 <br>




        </b-message>

        <div style="text-align: left;">
        <p class="subtitle">Todos:</p>
        <div class="list is-hoverable">
          <li class="list-item">Responsive mobile version</li>
          <li class="list-item">Lazy loading lookbook & product images</li>
          <li class="list-item">Full screen mode</li>
          <li class="list-item">Portrait images side by side</li>
          <li class="list-item">Better layout of shop-the-look product grid, with on hover</li> 
          <li class="list-item">Refactor lookbook code into smaller components</li>
          <li class="list-item">Get data from mockup api & use state management (VUEX)</li>
          <li class="list-item">Lookbook overview grid/table page</li>
          <li class="list-item">Unfocus shop-the-look pannel when scrolling down</li>
        </div>
      </div>



         
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isActive: true
            }
        }
    };
</script>

<style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
