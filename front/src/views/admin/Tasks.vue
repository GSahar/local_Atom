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
        @click="addTask()"
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
        @click="editTask(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        color="error"
        @click="removeTask(item.id)"
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
          title: 'Название задачи',
          align: 'start',
          sortable: true,
          key: 'name',
        },
        { title: '', align: 'end', key: 'actions', sortable: false }
      ],
      serverItems: [],
      loading: false,
      totalItems: 0,
      items: store.getters.getTasks,
      total:5,
      searchValue: ''
    }),
  methods: {
    search(){
        this.items = tasks?.filter(task =>  (task.name.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1))??[];
    },
    editTask(id){
        router.push({name: 'editingTask', params: {id: id}})
      },
    addTask(){
      store.dispatch('addTask');
      //TODO ищем id по другому
      let id = store.getters.getTasks[store.getters.getTasks.length-1].id;
      router.push({name: 'editingTask', params: {id: id}})
    },
    removeTask(id){
      store.dispatch('removeTask',id);
      this.getTasks();
    },
    getTasks(){
    this.items = store.getters.getTasks;
    },
  }
}
</script>
<style lang="">

</style>
