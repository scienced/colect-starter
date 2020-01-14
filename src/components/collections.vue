<template>
    <div>
      <div class="level">
        <div class="level-left">
            <search/>
        </div>
          <div class="level-right">
            <p class="level-item"><b-button type="is-primary" outlined>Upload list</b-button></p>
             <p class="level-item"> <button class="button is-primary">
            <b-icon pack="fas" icon="plus-circle" size="is-small"></b-icon>
            <span>Add new user</span>
        </button></p>
          </div>
       </div>
     

    <b-table :data="data" >
        <template slot-scope="props">
                <!--<b-table-column field="id" width="60" >
                    
                    <img src="https://images.cmft.io/1115457393585688576/1147868819155456000/1147868819176427520/cara-delevingne-photoshoot-for-puma-ad-2932x2932.jpg?w=25&h=25&fit=crop">
                </b-table-column>-->

                <b-table-column field="first_name" label="User" >
                    <template slot="header" slot-scope="{ column }">
                    <b-tooltip :label="column.label" dashed>
                        {{ column.label }}
                    </b-tooltip>
                </template>
                    {{ props.row.first_name }} {{ props.row.last_name }} <br>
                    <small>{{ props.row.email}}</small>
                </b-table-column>

                <b-table-column field="last_name" label="Email" >
                    {{ props.row.email}}
                </b-table-column>

                <b-table-column field="date" label="Created" >
                    <span>
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Role">
                    <span>
                        {{ props.row.type }}
                    </span>
                </b-table-column>
                <b-table-column label="">
                      <b-dropdown           
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span>
                            <b-icon
                                pack="fas"
                                icon="ellipsis-v"
                                size="is-small"
                               >
                            </b-icon>
                        </span>
                       
                    </a>
                    <b-dropdown-item value="settings">
                        <div class="media">
                            <b-icon class="media-left" icon="edit" size="is-small"></b-icon>
                            <div class="media-content">
                                <p>Edit user</p>
                            </div>
                        </div>
                        
                    </b-dropdown-item>
                    <b-dropdown-item value="logout" aria-role="menuitem"> 
                         <div class="media">
                            <b-icon class="media-left" icon="trash-alt" size="is-small" type="is-danger"></b-icon>
                            <div class="media-content">
                                <p>Delete user</p>
                            </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
                </b-table-column>

            </template>
    </b-table>
    <p class="has-text-left">💡 &nbsp;You're at your plan limit of 1 dashboard(s).
If you want more dashboards &nbsp;</p>
     <b-modal :active.sync="isImageModalActive" has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>>
            <p>
               blabla
            </p>
        </b-modal>
</div>
</template>

<script>
    import search from '@/components/search.vue'
    
    export default {
        components: {
         search
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
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Email',
                    },
                    {
                        field: 'date',
                        label: 'Create Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Type',
                    },
                    {
                        field: 'gender',
                        label: 'Actions',
                    }
                ],
                isImageModalActive: false,
            }
        },
        methodes: {
        
        },

        created () {

            this.$buefy.snackbar.open({
                    message: 'Yellow button and positioned on top, click to close',
                    type: 'is-primary',
                    position: 'is-bottom-left',
                    actionText: 'HIDE',
                    indefinite: true,
                    
                })


        }
    }
</script>