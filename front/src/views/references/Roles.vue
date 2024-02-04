<template>
  <div
    class="d-flex
           flex-row
           justify-space-between
           w-100"
  >
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
    <v-btn
        color="primary"
        class="mt-5 me-3"
        @click="addRole()"
      >
        Добавить
      </v-btn>
  </div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      item-key="id"
      :loading="!isLoaded"
    >
    <template v-slot:item.actions="{ item }">
        <v-icon
          size="small"
          class="me-2"
          color="primary"
          @click="editRole(item.id)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small"
          color="error"
          @click="removeRole(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </template>
  <script>
import router from '@/router';
import store from '@/store';

  export default {
    data: () => ({
        itemsPerPage: 5,
        headers: [
          {
            title: 'Наименование роли',
            align: 'start',
            sortable: true,
            key: 'name',
          },
          { title: '', align: 'end', key: 'actions', sortable: false }
        ],
        serverItems: [],
        isLoaded: false,
        totalItems: 0,
        total:5,
        searchValue: ''
      }),
    methods: {
      search(){
          this.items = roles?.filter(user =>  (user.name.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1))??[];
      },
      editRole(id){
        router.push({name: 'editingRole', params: {id: id}})
      },
      addRole(){
        store.dispatch('addNewRole');
        //TODO ищем id по другому
        let id = store.getters.getRoles[store.getters.getRoles.length-1].id;
        router.push({name: 'editingRole', params: {id: id}})
      },
      removeRole(id){
        store.dispatch('removeRole',id);
        this.getRoles();
      },
    },
    computed: {
      items: function(){
        let items = store.getters.getRoles;
        if(items && items.length > 0 ) this.isLoaded = true;
        return items;
      }
    }
  }
  </script>
  <style lang="">

  </style>
