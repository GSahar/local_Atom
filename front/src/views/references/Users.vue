<template>
<div class="w-25 mb-3 ms-1">
  <v-text-field
    name="search"
    label="Поиск"
    variant="underlined"
    color="primary"
    class="w-10"
    prepend-icon="mdi-magnify"
    v-model="searchValue"
    @input="search"
  ></v-text-field>
</div>

  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    class="elevation-1"
    item-key="id"
  >
  <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        color="primary"
        @click="editUser(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        color="error"
        @click="console.log('delete ' + item.name)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import router from '@/router';
import store from '@/store';

 const users = [

  ]

export default {
  data: () => ({
      itemsPerPage: 5,
      headers: [
        {
          title: 'Имя',
          align: 'start',
          sortable: true,
          key: 'name',
        },
        { title: 'Место работы',
          align: 'start',
          sortable: true,
          key: 'place', },
        { title: 'Должность',
          align: 'start',
          sortable: true,
          key: 'job', },
        { title: '', align: 'end', key: 'actions', sortable: false }
      ],
      items: store.getters.getUsers.map(user => {
        return {
          ...user,
          name: user.lastName + ' ' + user.firstName + ' ' + user.secondName
        }
      }),
      serverItems: [],
      loading: false,
      totalItems: 0,
      total:5,
      searchValue: ''
    }),
  computed: {

  },
  methods: {
    search(){
        this.items =
            users?.filter(user => ((user.lastName + ' ' + user.firstName + ' ' + user.secondName).toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1 ||
                                user.place.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1 ||
                                user.job.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1))
                  .map(user => {
                    return {
                      ...user,
                      name: user.lastName + ' ' + user.firstName + ' ' + user.secondName
                    };
                  })??[];
    },
    editUser(item){
      router.push({name: 'editingUser', params: {id: item.id}})
    }
  },
  mounted: function(){
    //console.log();
  }
}
</script>
<style lang="">

</style>
