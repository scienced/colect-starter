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
          <li class="list-item done">Lazy loading images</li>
          <li class="list-item">Build seperate full screen mode</li>
          <li class="list-item done">Portrait images side by side</li>
          <li class="list-item  ">Detect image orientation on lazy loading</li>
          <li class="list-item done">Better layout of shop-the-look product grid, with on hover</li> 
          <li class="list-item">Refactor lookbook code into smaller components</li>
          <li class="list-item">Get data from mockup api & use state management (VUEX)</li>
          <li class="list-item">Unfocus shop-the-look pannel when scrolling down</li>
          <li class="list-item done">API requirements</li>
          <li class="list-item">Favorite/add to cart a product</li>
          
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

.done {
  text-decoration: line-through;
}
</style>
