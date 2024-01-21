<template>
<div class="w-100 mb-3 ms-1 d-flex justify-space-between">
  <div style="width: 350px;">
    <v-text-field
      name="search"
      label="Поиск"
      variant="underlined"
      color="primary"
      width="5px"
      prepend-icon="mdi-magnify"
      v-model="searchValue"
      @input="search"
    ></v-text-field>
  </div>
  <v-btn
    class="mr-3 mt-4"
    color="success"
    @click="addUser()"
  >
    Добавить
  </v-btn>
</div>

  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
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
        @click="removeUser(item.id)"
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
      items: [],
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
            store.getters.getUsers?.filter(user => ((user.lastName + ' ' + user.firstName + ' ' + user.secondName).toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1 ||
                                user.place.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1 ||
                                user.job.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1))
                  .map(user => {
                    return {
                      ...user,
                      name: user.lastName + ' ' + user.firstName + ' ' + user.secondName
                    };
                  })??[];
    },
    getUsers(){
      this.items = store.getters.getUsers.map(user => {
        return {
          ...user,
          name: user.lastName + ' ' + user.firstName + ' ' + user.secondName
        }
      });
    },
    editUser(item){
      router.push({name: 'editingUser', params: {id: item.id}})
    },
    addUser(){
      store.dispatch('addUser');
      //TODO ищем id по другому
      let id = store.getters.getUsers[store.getters.getUsers.length-1].id;
      router.push({name: 'editingUser', params: {id: id}})
    },
    removeUser(id){
      store.dispatch('removeUser',id);
      this.getUsers();
    }
  },
  mounted: function(){
    //console.log();
    this.getUsers();
  }
}
</script>
<style lang="">

</style>
