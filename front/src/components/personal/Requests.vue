<template >
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
    <v-spacer></v-spacer>
  </div>
  <section>
    <v-data-table
    :headers="headers"
    :items="items"
    items-per-page="9"
    hide-actions
    item-key="id"
  >
  <template v-slot:item.actions="{ item }">
    <v-btn
      color="error"
      variant="plain"
    >

      Отменить
    </v-btn>
    </template>
    <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
          ></v-pagination>
        </div>
      </template>
  </v-data-table>
  </section>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'PersonalRequests',
  data: () => ({
    searchValue: '',
    headers: [
      {
        title: 'Наименование информационного ресурса',
        align: 'start',
        sortable: true,
        key: 'name',
      },
      {
        title: 'Тип',
        align: 'start',
        sortable: true,
        key: 'type',
      },
      {
        title: 'Согласующий',
        align: 'start',
        sortable: true,
        key: 'manager',
      },
      {
        title: 'Состояние',
        align: 'start',
        sortable: true,
        key: 'status',
      },
      {
        title: 'Комментарий',
        align: 'start',
        sortable: true,
        key: 'comment',
      },
      { title: '', align: 'end', key: 'actions', sortable: false }
    ],
    refItems: store.getters.getRequestsByUser(2),
    page:1
  }),
  methods: {
    search(){

    },
  },
  computed:{
    pageCount: function(){
      return Math.ceil(this.items.length/9)
    },
    items: function(){
      return this.refItems.map(item => {
        let task = store.getters.getTask(item.task_id);
        let manager = store.getters.getUser(item.manager_id);
        return {
          ...item,
          name: task.name,
          type: store.getters.getTaskType(task.type).name,
          manager: manager.lastName + ' ' + manager.firstName.substring(0,1) + '.' + manager.secondName.substring(0,1)
        }
      })
    }
  },
  mounted: function(){
  }
}
</script>
<style lang="">

</style>
