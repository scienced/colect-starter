<template>
    <div>
      <div class="level">
        <div class="level-left">
           
        </div>

         <div class="level-item has-text-centered">
             <b-dropdown position="is-bottom-center" aria-role="menu" trap-focus>
                    <a
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span>Look 4 of 5 </span>
                        <b-icon icon="caret-down" size="is-small"></b-icon>
                    </a>
                    <b-dropdown-item aria-role="listitem">Look 1</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Look 2</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Look 3</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Look 4</b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">Look 5</b-dropdown-item>
              </b-dropdown>
          </div>

          <div class="level-right">
             <p class="level-item"> <button class="button is-primary">
            <b-icon pack="fas" icon="expand"></b-icon>
            
        </button></p>
          </div>
       </div>

     

    </div>
</template>

<script>
    
    export default {
        components: {
         
        },
        data() {
            return {
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'email': 'jesse@colect.io', 'date': '2016-10-15 13:43:27', 'type': 'Sales Rep' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'email': 'john@colect.io', 'date': '2016-12-15 06:00:53', 'type': 'Sales Rep'  },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'email': 'tima@colect.io', 'date': '2016-04-26 06:26:28', 'type': 'Sales Rep' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'email': 'clarence@colect.io','date': '2016-04-10 10:28:46', 'type': 'Sales Rep'  },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'email': 'anne@colect.io', 'date': '2016-12-06 14:38:38', 'type': 'Retailer'  }
                ],
                
            }
        },
        methodes: {      
        },

        created () {
        }
    }
</script>